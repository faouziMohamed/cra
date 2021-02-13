import Head from "next/head";
import TableOfContent from "./tableOfContent";
import Footer from "./footer";
import BottomNavigation from "./bottomNavigation";
import LeftBurgerButton from "./burgerBtn";
import Header from "./header";

function PageHeader({ pageTitle, pageSubtitle }) {
    return (
        <header className="main-header">
            <h1 className="main-title">{pageTitle}</h1>
            <p className="main-sub-title">{pageSubtitle}</p>
        </header>
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

export default function Layout({ metadata, data, navigation }) {
    const { pageTitle, pageSubtitle, date, lastUpdate, path } = metadata;
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
                    <link rel="stylesheet" href="/css/noscript.css" />
                </noscript>
            </Head>
            <Header />
            <LeftBurgerButton />
            <main className="app-content main-content flex">
                <TableOfContent />
                <div className="content-wrapper">
                    <article className="main-article flex">
                        <PageHeader
                            pageTitle={pageTitle}
                            pageSubtitle={pageSubtitle}
                        />
                        <PageContent data={data} />
                        <BottomNavigation
                            prevBtnLink={navigation.prev}
                            nextBtnLink={navigation.next}
                        />
                        <Footer />
                    </article>
                </div>
            </main>
        </>
    );
}
