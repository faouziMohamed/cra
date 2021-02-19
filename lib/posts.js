import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

export function getPageMetadata(pathToMetadata) {
  const fullPath = path.join(pathToMetadata, "index.yaml");
  const matterResult = matter.read(fullPath);
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
  const matterResult = matter.read(fileName);
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

import glob from "glob";
export function getAllPageIds(pattern, topParent = "data") {
  // The pattern must be something like data/formations/**/*.yaml */
  // return every folder name containing the '*.yaml' file
  return glob.sync(process.cwd() + pattern).map((foldersPath) => {
    const pathSplitted = foldersPath.split("/");
    const topParentIndex = pathSplitted.indexOf(topParent);
    const finalPath = pathSplitted.slice(topParentIndex + 1, -1);
    return {
      params: { id: finalPath },
    };
  });
}

export function getContentPath(id) {
  const path = glob.sync(`${process.cwd()}/**/${id}`);
  return path.length > 0 ? path[0] : "";
}
