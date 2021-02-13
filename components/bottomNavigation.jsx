import Link from "next/link";
export default function BottomNavigation({ prevBtnLink, nextBtnLink }) {
    const buttonMeta = {
        previous: {
            link: prevBtnLink,
            title: "Go to previous page",
            text: "Précédent",
            className: "prev-btn",
            icon: "fa fa-arrow-left",
        },
        next: {
            link: nextBtnLink,
            title: "Go to next page",
            text: "Suivant",
            className: "next-btn",
            icon: "fa fa-arrow-right",
        },
    };
    return (
        <nav className="nav-btn-wrapper flex">
            {Object.values(buttonMeta).map((button) => {
                let mustBeHidden = button.link === "/" ? "hidden" : " ";
                let className = `${button.className} ${mustBeHidden}`;
                className += ` nav-btn-item flex"`;
                return (
                    <Link href={button.link} key={button.className}>
                        <a className={className} title={button.title}>
                            <i className={button.icon} aria-hidden="true"></i>
                            <span className="nav-btn-text">{button.text}</span>
                        </a>
                    </Link>
                );
            })}
        </nav>
    );
}
