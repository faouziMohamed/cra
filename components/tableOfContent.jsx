export default function TableOfContent() {
    return (
        <section
            id="app-left-side"
            className="app-left-side app-table-of-content"
        >
            <div className="toc-wrapper flex">
                <h1 className="table-of-content-title">Les Grandes lignes</h1>
                <nav className="table-of-content-nav">
                    <ul
                        id="table-of-content-list"
                        className="table-of-content-list"
                    >
                        {/* <!--List items added programmatically by JS--> */}
                    </ul>
                </nav>
            </div>
        </section>
    );
}
