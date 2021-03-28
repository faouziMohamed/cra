import ArticleLayout from "../components/articleLayout";
import { getAllArticlesIds, getPageData } from "../lib/posts";

export function getStaticPaths() {
  const { ids } = getAllArticlesIds();
  return {
    paths: ids,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const pathToContent = params.id.join("/");
  const { pageMetadata, pageContent } = getPageData(pathToContent);

  return {
    props: {
      metadata: pageMetadata,
      navigation: {
        prev: pageMetadata.prev,
        next: pageMetadata.next,
      },
      data: pageContent,
    },
  };
}

export default function Formations({ metadata, data, navigation }) {
  return (
    <ArticleLayout metadata={metadata} data={data} navigation={navigation} />
  );
}
