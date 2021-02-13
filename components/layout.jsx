import TableOfContent from "./tableOfContent";
import Footer from "./footer";
import BottomNavigation from "./bottomNavigation";

const pageHeading = "Club de recherche Académique";

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

export default function Layout({ metadata, data }) {
    const { pageTitle, pageSubtitle, date, lastUpdate, path } = metadata;
    return (
        <main className="app-content main-content flex">
            <TableOfContent />
            <div className="content-wrapper">
                <article className="main-article flex">
                    <PageHeader
                        pageTitle={pageTitle}
                        pageSubtitle={pageSubtitle}
                    />
                    <PageContent data={data} />
                    <BottomNavigation prevBtnLink="/" nextBtnLink="/next" />
                    <Footer />
                </article>
            </div>
        </main>
    );
}
