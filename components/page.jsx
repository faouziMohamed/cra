import Head from "next/head";
import { useEffect } from "react";
import Layout from "./mainLayout";
import enableThemes from "../js/themes";
import {
  handleEmptyLinks,
  configureBurgerMenu,
  createTableOfContent,
} from "../js/main";
export function PageContent({ data }) {
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
