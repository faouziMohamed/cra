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
  useEffect(() => {
    enableThemes();
    handleEmptyLinks();
    configureBurgerMenu();
  }, []);

  useEffect(() => {
    createTableOfContent();
  });

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>

      <Layout metadata={metadata} navigation={navigation} article>
        <PageContent data={data} />
      </Layout>
    </>
  );
}

function PageContent({ data }) {
  return Object.values(data).map((section) => (
    <section
      className="main-section"
      key={section.id}
      data-date={section.metadata.date}
      dangerouslySetInnerHTML={{
        __html: section.contentHTML,
      }}
    />
  ));
}
