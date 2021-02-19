import Link from "next/link";
import { craSocialLinks } from "./cra-info";

function UsefulLinksBloc() {
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

  return (
    <section className="app-footer-useful-link app-footer-section">
      <h1 className="useful-link-title app-footer-section-title">
        Liens utiles
      </h1>
      <ul className="cra-social-links-wrapper flex">
        {Object.values(craSocial).map((social) => (
          <li className="cra-social-link-item" key={social.className}>
            <Link href={social.link}>
              <a className={`${social.className} a-cra-social-link`}>
                <i className={social.icon}></i>
              </a>
            </Link>
          </li>
        ))}
      </ul>
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
        Reporter les erreurs du site sur{" "}
        <Link href={`${craSocialLinks.githubRepo()}/issues`}>
          <a className="issue-github">github/issues</a>
        </Link>
      </p>

      <p className="pull-request-text">
        Pour contribuer à l'amélioration du site reportez-vous sur{" "}
        <Link href={`${craSocialLinks.githubRepo()}/pulls`}>
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
