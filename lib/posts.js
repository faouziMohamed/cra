import fs from "fs";
import glob from "glob";
import matter from "gray-matter";
import path from "path";
import remark from "remark";
import html from "remark-html";

export default function getPageData(pathToFiles) {
  const pageMetadata = getPageMetadata(pathToFiles);
  const pageContent = getPageArticle(pathToFiles);
  return { pageContent, pageMetadata };
}

export function getPageMetadata(pathToMetadata, metadataFile = "index.yaml") {
  const fullPath = path.join(pathToMetadata, metadataFile);
  const matterResult = matter.read(fullPath);
  return matterResult.data;
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

export function getPageArticle(pathToMetadata, metadataFile = "index.yaml") {
  const isFile = (fileName) => fs.lstatSync(fileName).isFile();
  const isNotMetadataFile = (fileName) => !fileName.includes(metadataFile);
  // Get only yaml files that are not the metadata file
  const sections = fs
    .readdirSync(pathToMetadata)
    .map((fileName) => path.join(pathToMetadata, fileName))
    .filter(isFile)
    .filter(isNotMetadataFile)
    .map((fileName) => getSections(fileName));

  // Convert array of section into object of sections
  return Object.assign({}, sections);
}

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

export function getHomePageData() {
  const homePageDataDir = path.join(process.cwd(), "data/home");
  return getPageData(homePageDataDir);
}

export function getAllFomationsMetadata() {
  const PREFIX = `data/formations`;
  const pattern = `**/index.yaml`;
  return getAllPageIds(`/${PREFIX}/${pattern}`, "formations")
    .map((path) => {
      return {
        id: path.params.id,
        data: getPageMetadata(`${PREFIX}/${path.params.id.join("/")}`),
      };
    })
    .sort((a, b) => {
      if (a.data.date < b.data.date) {
        return -1;
      } else if (a.data.date > b.data.date) {
        return 1;
      } else {
        return 0;
      }
    });
}

export function yamlToHTML(yamlText) {
  return remark().use(html).processSync(yamlText).toString();
}
