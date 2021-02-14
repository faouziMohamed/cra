import Layout from "../../../components/layout";
import getPageData from "../../../lib/posts";

export function getStaticProps({ params }) {
    const { pageMetadata, pageContent } = getPageData(
        "data/formations/git-github"
    );
    return {
        props: {
            metadata: pageMetadata,
            data: pageContent,
            navigation: {
                prev: "/home",
                next: "/#",
            },
        },
    };
}

export default function GitGitHub({ metadata, data, navigation }) {
    return (
        <>
            <div className="root" id="app">
                <Layout
                    metadata={metadata}
                    data={data}
                    navigation={navigation}
                />
            </div>
        </>
    );
}
