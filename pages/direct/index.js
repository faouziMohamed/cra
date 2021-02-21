import Head from "next/head";
import Link from "next/link";
import Layout, { IncludeIf } from "../../components/mainLayout";
import enableThemes from "../../js/themes";

import css from "../../components/styles/formations.module.css";
import { useEffect } from "react";
const metadata = {
  title: "Introduction sur Git et GitHub | CRA",
  authors: "cra",
  description: "Le direct sur l'initiation de git et github",
  keywords: "direct, formations, workshop",
  pageTitle: "Initiation sur Git et GitHub",
  pageSubtitle: "Git et GitHub",
  path: "/direct",
  ogImg: "/images/dwIcons/acem-logo-white.svg",
  doctype: "video",
};

export default function Direct() {
  useEffect(() => {
    enableThemes();
  }, []);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Layout metadata={metadata}>
        <div
          className={`${css.article_wraper} flex`}
          style={{ width: "100%", height: "100%" }}>
          <iframe
            allow="camera; microphone; fullscreen; display-capture"
            src="https://meet.jit.si/git-github"
            style={{
              position: "fixed",
              top: "80px",
              left: 0,
              right: 0,
              width: "100vw",
              height: "88vh",
              border: "0px",
            }}></iframe>
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
