import Link from "next/link";
const improveLinks = {
    githubPullRequests: "https://github.com/arcAcemK/cra-cr/pulls",
    githubPullIssues: "https://github.com/arcAcemK/cra-cr/issues",
};

const craSocialLinks = {
    facebook:
        "https://www.facebook.com/Club-de-Recherche-Acad%C3%A9mique-310130176356323/",
    github: "https://github.com/arcAcemK/",
};

const craSocial = {
    facebook: {
        link: craSocialLinks.facebook,
        className: "cra-social-fb",
        icon: "fab fa-facebook-f",
    },
    github: {
        link: craSocialLinks.github,
        className: "cra-social-github",
        icon: "fab fa-github",
    },
};

function UsefulLinksBloc() {
    return (
        <section className="app-footer-useful-link app-footer-section flex">
            <h1 className="useful-link-title app-footer-section-title">
                Liens utiles
            </h1>
            <section className="cra-social-link-section flex">
                <h2 className="cra-social-title">CRA de l'ACEM Kénitra</h2>
                <ul className="cra-social-links-wrapper flex">
                    {Object.values(craSocial).map((social) => (
                        <li
                            className="cra-social-link-item"
                            key={social.className}
                        >
                            <Link href={social.link}>
                                <a
                                    className={`${social.className} a-cra-social-link`}
                                >
                                    <i className={social.icon}></i>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}

function ImproveBloc() {
    return (
        <section className="app-footer-github-related app-footer-section">
            <h1 className="github-related-title app-footer-section-title">
                Améliorer cette page
            </h1>
            <p className="issues-text">
                Reporter les erreurs du site sur
                <Link href={improveLinks.githubPullIssues}>
                    <a className="issue-github">github/issues</a>
                </Link>
            </p>

            <p className="pull-request-text">
                Pour contribuer à l'amélioration du site reportez-vous sur
                <Link href={improveLinks.githubPullRequests}>
                    <a className="pull-request-github">github/pull request</a>
                </Link>
            </p>
        </section>
    );
}

function CopyRightBloc() {
    return (
        <aside className="app-footer-copyright footer-top-item">
            <p>
                CRA - ACEM Kénitra &copy;
                <span
                    className="app-footer-year"
                    data-current-year={new Date().getFullYear()}
                >
                    {new Date().getFullYear()}
                </span>
            </p>
        </aside>
    );
}

export default function Footer() {
    return (
        <footer className="app-footer flex">
            <div className="app-footer-content-wrapper footer-top-item flex">
                <UsefulLinksBloc />
                <ImproveBloc />
            </div>
            <CopyRightBloc />
        </footer>
    );
}
