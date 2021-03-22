import parse from "html-react-parser";
import Head from "next/head";
import { useEffect } from "react";

import {
  configureBurgerMenu,
  createTableOfContent,
  handleEmptyLinks,
} from "../lib/main";
import enableThemes from "../lib/themes";
import Layout from "./mainLayout";

export default function ArticleLayout({ metadata, data, navigation }) {
  useSideEffect();
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>

      <Layout metadata={metadata} navigation={navigation} article>
        <PageContentData data={data} />
      </Layout>
    </>
  );
}

function useSideEffect() {
  useThemes();

  useEffect(() => {
    enableThemes();
    handleEmptyLinks();
    configureBurgerMenu();
  }, []);

  useEffect(() => {
    createTableOfContent();
    return function clearTableOfContent() {
      document.querySelectorAll(".toc-li, .toc-page-title").forEach((node) => {
        node.remove();
      });
    };
  });
}

export function useThemes() {
  useEffect(() => {
    enableThemes();
  }, []);
}

export function PageContentData({ data }) {
  return Object.values(data).map((section) => (
    <section
      className="main-section"
      key={section.id}
      data-date={section.metadata.date}>
      {parse(section.contentHTML)}
    </section>
  ));
}
