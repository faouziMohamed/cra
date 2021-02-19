import Head from "next/head";
import { useEffect } from "react";
import main from "../js/main";
import Layout from "./mainLayout";

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
    main();
  }, []);
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>

      <Layout metadata={metadata} data={data} navigation={navigation} article>
        <PageContent data={data} />
      </Layout>
    </>
  );
}
