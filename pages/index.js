import ArticleLayout from "../components/articleLayout";
import { getHomePageData } from "../lib/posts";

export function getStaticProps() {
  const { pageMetadata, pageContent } = getHomePageData();
  return {
    props: {
      metadata: pageMetadata,
      data: pageContent,
      navigation: {
        prev: "/#",
        next: "/formations",
      },
    },
  };
}

export default function Home({ metadata, data, navigation }) {
  return (
    <>
      <ArticleLayout metadata={metadata} data={data} navigation={navigation} />
    </>
  );
}
