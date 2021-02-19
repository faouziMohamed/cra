import ArticleLayout from "../../components/page";
import getPageData, { getAllPageIds } from "../../lib/posts";

const dataTopParent = "formations";
const PREFIX = `data/${dataTopParent}`;

export function getStaticPaths() {
  const pattern = `/${PREFIX}/**/index.yaml`;
  const paths = getAllPageIds(pattern, dataTopParent);
  return {
    paths: paths,
    fallback: false,
  };
}

export function getStaticProps({ params, req }) {
  console.log(req);
  const pathToContent = params.id.join("/");
  const { pageMetadata, pageContent } = getPageData(
    `${PREFIX}/${pathToContent}`
  );
  console.log("------------------------------------");
  console.log(pageMetadata, params);
  console.log("------------------------------------");
  return {
    props: {
      /*  req, */
      metadata: pageMetadata,
      navigation: {
        prev: pageMetadata.prev,
        next: pageMetadata.next,
      },
      data: pageContent,
    },
  };
}

/* import absoluteUrl from "next-absolute-url"; */
export default function Formations({ metadata, data, navigation, req }) {
  /*   const { origin } = absoluteUrl(req);
  console.log(origin);
  const apiURL = `${origin}/api/job.js`; */
  return (
    <div className="root" id="app">
      <ArticleLayout metadata={metadata} data={data} navigation={navigation} />
    </div>
  );
}
