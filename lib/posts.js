import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

export function getPageMetadata(pathToMetadata) {
    const fullPath = path.join(pathToMetadata, "index.yaml");
    const matterResult = matter.read(fullPath, { excerpt: true });
    return matterResult.data;
}

export function yamlToHTML(yamlText) {
    return remark().use(html).processSync(yamlText).toString();
}

function getSections(fileName) {
    //Remove the yaml extension in the file name
    const id = fileName
        .replace(/\.yaml$/, "")
        .split("/")
        .slice(-1);
    const matterResult = matter.read(fileName, { excerpt: true });
    const contentHTML = yamlToHTML(matterResult.content);
    return {
        id,
        metadata: matterResult.data,
        contentHTML: contentHTML,
    };
}

export function getPageArticle(pathToMetadata) {
    const isFile = (fileName) => {
        return fs.lstatSync(fileName).isFile();
    };
    // Get only yaml files that are not 'index.yaml'
    const sections = fs
        .readdirSync(pathToMetadata)
        .map((fileName) => path.join(pathToMetadata, fileName))
        .filter(isFile)
        .filter((fileName) => !/index.yaml/.test(fileName))
        .map((fileName) => getSections(fileName));

    // Convert array of section into object of sections
    return Object.assign({}, sections);
}

export function getHomePageData() {
    const homePageDataDir = path.join(process.cwd(), "data/home");
    return getPageData(homePageDataDir);
}

export default function getPageData(pathToFiles) {
    const pageMetadata = getPageMetadata(pathToFiles);
    const pageContent = getPageArticle(pathToFiles);
    return { pageContent, pageMetadata };
}
