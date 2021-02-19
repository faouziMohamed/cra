import Head from "next/head";
import Link from "next/link";
import Layout, { IncludeIf } from "../../components/mainLayout";
import enableThemes from "../../js/themes";

import css from "../../components/styles/formations.module.css";
import { useEffect } from "react";
const metadata = {
  title: "Formations et Workshops | CRA",
  authors: "cra",
  description: "Pade des formations et Workshops",
  keywords: "Download, téléchargement, article",
  pageTitle: "Les formations du club de recherche",
  pageSubtitle: "Tous les formations",
  path: "/formations",
  ogImg: "/images/dwIcons/acem-logo-white.svg",
  doctype: "msdoc",
};

const docTypeValue = {
  msdoc: "Ouvrir le document",
  unknown: "",
};
export default function OverView() {
  useEffect(() => {
    enableThemes();
  }, []);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Layout metadata={metadata}>
        <div className={`${css.article_wraper} flex`}>
          <DocCard
            readLink={"/read-doc/f/git-github"}
            dLink={"/download-doc/f/git-github"}
            articleLink={"/formations/git-github"}
            logo={"/images/dwIcons/git-github-img.svg"}
            logoAltTxt={"Git GitHub icon"}
            title={"Introduction sur Git et GitHub"}
            titleHead={"Git et GitHub"}
            author={"Faouzi Mohamed"}
            date={"Le 21/02/2021 sur Google Meet à 16h30"}
          />
          <DocCard
            readLink={"/read-doc/f/powerpoint"}
            dLink={"/download-doc/f/powerpoint"}
            articleLink={"/formations/bureautique/powerpoint"}
            logo={"/images/dwIcons/powerpoint.png"}
            logoAltTxt={"Powerpoint Icon"}
            title={"Initiation sur PowerPoint"}
            titleHead={"Microsoft PowerPoint"}
            author={"Faouzi Mohamed, ALi Hamidi Imam, Ambourrahmane"}
            date={"Date non définie"}
            /* rightLogo={"/images/dwIcons/git-github-img.svg"} */
          />
        </div>
      </Layout>
    </>
  );
}

function DocCard({
  articleLink,
  dLink,
  readLink,
  title,
  author,
  date,
  logo,
  titleHead,
}) {
  const isKnownDoctype = docTypeValue[metadata.doctype] !== undefined;
  return (
    <>
      <article className={`${css.download_article} flex`}>
        <section className={`${css.download_section} flex`}>
          <h1 className={css.articleName}>
            <Link href={articleLink}>
              <a className={css.link}>{titleHead}</a>
            </Link>
          </h1>

          <div className={`${css.download_link_container} flex`}>
            <figure className={`${css.cardFigure} flex`}>
              <img
                className={`${css.round} css.noRadius`}
                src={logo}
                width="130"
              />
              <figcaption className={`${css.cardDescription} flex`}>
                <h2 className={`${css.titleMargin}`}>
                  <Link href={articleLink}>
                    <a className={`${css.link_to_article}`}>{title}</a>
                  </Link>
                </h2>

                <h3 className={`${css.Author}`}>{author}</h3>
                <small className={`${css.smallInfoStyle}`}>{date}</small>
              </figcaption>

              <div className={`${css.button_container}  flex`}>
                <div className={`${css.btn_links_parent} flex`}>
                  <Link href={dLink}>
                    <a className={`${css.downloadBtn} ${css.btn_links} flex`}>
                      <i className="fas fa-download"></i>
                      <span className={`${css.btn_text}`}>Télécharger</span>
                    </a>
                  </Link>

                  <IncludeIf condition={isKnownDoctype}>
                    <Link href={readLink}>
                      <a className={`${css.openBtn} ${css.btn_links} flex`}>
                        <i className="fab fa-readme"></i>
                        <span className={`${css.btn_text}`}>
                          {docTypeValue[metadata.doctype]}
                        </span>
                      </a>
                    </Link>
                  </IncludeIf>
                </div>
              </div>
            </figure>
          </div>
        </section>
      </article>
    </>
  );
}
