export default function BottomNavigation() {
    return (
        <nav className="nav-btn-wrapper flex">
            <a
                className="nav-btn-item prev-btn hi flex"
                aria-labelledby="Go to previous page"
            >
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                <span className="nav-btn-text">Précédent</span>
            </a>
            <a
                className="nav-btn-item next-btn flex"
                aria-labelledby="Go to next page"
            >
                <span className="nav-btn-text">Suivant</span>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
        </nav>
    );
}
