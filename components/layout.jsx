import TableOfContent from "./tableOfContent";
import Footer from "./footer";
import BottomNavigation from "./bottomNavigation";

const pageHeading = "Club de recherche Académique";

export default function Layout({ metadata, data }) {
    const { pageTitle, pageSubtitle, date, lastUpdate, path } = metadata;
    return (
        <main className="app-content main-content flex">
            {/* <!--Section containing the table of content--> */}
            <TableOfContent />
            <div className="content-wrapper">
                <article className="main-article flex">
                    <header className="main-header">
                        <h1 className="main-title">{pageTitle}</h1>
                        <p className="main-sub-title">{pageSubtitle}</p>
                    </header>
                    {Object.values(data).map((section) => (
                        <section
                            className="main-section"
                            key={section.id}
                            data-date={section.metadata.date}
                            dangerouslySetInnerHTML={{
                                __html: section.contentHTML,
                            }}
                        />
                    ))}
                    <BottomNavigation />
                    <Footer />
                </article>
            </div>
        </main>
    );
}
