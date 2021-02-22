import Link from "next/link";

import { IncludeIf } from "./mainLayout";

export default function BottomNavigation({ navigation, isArticle }) {
  const navLinks = navigation || { prev: "/#", next: "/#" };
  const buttonMeta = {
    previous: {
      link: navLinks.prev,
      title: "Go to previous page",
      text: "Précédent",
      className: "prev-btn",
      icon: "fa fa-arrow-left",
    },
    next: {
      link: navLinks.next,
      title: "Go to next page",
      text: "Suivant",
      className: "next-btn",
      icon: "fa fa-arrow-right",
    },
  };
  return (
    <IncludeIf condition={isArticle}>
      <nav className="nav-btn-wrapper flex">
        {Object.values(buttonMeta).map((button) => {
          let mustBeHidden = button.link === "/#" ? "hidden" : " ";
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
    </IncludeIf>
  );
}
