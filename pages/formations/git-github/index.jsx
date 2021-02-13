import Head from "next/head";
import Header from "../../../components/header";
import LeftBurgerButton from "../../../components/burgerBtn";
import Layout from "../../../components/layout";
import getHomePageData from "../../../lib/land-page";

export function getStaticProps({ params }) {
    const { pageMetadata, pageContent } = getHomePageData();
    return {
        props: {
            metadata: pageMetadata,
            data: pageContent,
        },
    };
}

export default function Home({ metadata, data }) {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="author" content={metadata.authors} />
                <meta name="keywords" content={metadata.keywords} />
                <meta name="description" content={metadata.description} />
                <meta name="color-scheme" content="dark light" />
                <meta name="theme-color" content="#4285f4" />
                <noscript>
                    <link rel="stylesheet" href="../styles/noscript.css" />
                </noscript>
            </Head>
            <div className="root" id="app">
                <Header />
                <LeftBurgerButton />
                <Layout metadata={metadata} data={data} />
            </div>
        </>
    );
}
