import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const homePageDataDir = path.join(process.cwd(), "data/intro");

export function getPageMetadata(pathToMetadata) {
    const fullPath = path.join(pathToMetadata, "index.yaml");
    const matterResult = matter.read(fullPath, { excerpt: true });
    return matterResult.data;
}

function yamlToHTML(yamlText) {
    return remark().use(html).processSync(yamlText).toString();
}

function getSections(pathToMetadata, fileName) {
    //Remove the yaml extension in the file name
    const id = fileName.replace(/\.yaml$/, "");
    const fullPath = path.join(pathToMetadata, fileName);
    const matterResult = matter.read(fullPath, { excerpt: true });
    const contentHTML = yamlToHTML(matterResult.content);
    return {
        id,
        metadata: matterResult.data,
        contentHTML: contentHTML,
    };
}

/**
 * Return a list of all section that will be in the article */
export function getPageArticle(pathToMetadata) {
    const allFiles = fs.readdirSync(pathToMetadata);
    // Get only yaml files that are not 'index.yaml'
    const dataFiles = allFiles.filter((f) => !/index.yaml/.test(f));

    let sections = dataFiles.map((fileName) =>
        getSections(pathToMetadata, fileName)
    );

    // Convert array of section into object of sections
    return Object.assign({}, sections);
}
export default function getHomePageData() {
    const pageMetadata = getPageMetadata(homePageDataDir);
    const pageContent = getPageArticle(homePageDataDir);
    return { pageContent, pageMetadata };
}
