import Layout from "../../components/layout";
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

export function getStaticProps({ params }) {
    const pathToContent = params.id.join("/");
    const { pageMetadata, pageContent } = getPageData(
        `${PREFIX}/${pathToContent}`
    );
    console.log(__filename, pageMetadata);
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
        <div className="root" id="app">
            <Layout metadata={metadata} data={data} navigation={navigation} />
        </div>
    );
}
