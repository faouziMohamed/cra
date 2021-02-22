import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

import Date from "../../components/date";
import Layout, { IncludeIf } from "../../components/mainLayout";
import css from "../../components/styles/formations.module.css";
import { getAllFomationsMetadata, getPageMetadata } from "../../lib/posts";
import enableThemes from "../../lib/themes";

const docTypeValue = {
  msdoc: "Ouvrir le document",
  pdf: "Ouvrir le document",
  video: "Lire la video",
  unknown: undefined,
};

export function getStaticProps() {
  return {
    props: {
      metadata: getAllFomationsMetadata(),
      pageMetadata: getPageMetadata("data/formations", "formations.yaml"),
    },
  };
}

export default function OverView({ metadata, pageMetadata }) {
  useEffect(() => {
    enableThemes();
  }, []);

  const cardData = metadata.map((meta) => {
    return {
      key: meta.id.join("/"),
      readLink: `/read-doc/f/${meta.id.slice(-1)}`,
      dLink: `/dowload-doc/f/${meta.id.slice(-1)}`,
      articlePath: `/formations/${meta.id.join("/")}`,
      logo: meta.data.logo,
      logoAltTxt: meta.data.logoAltTxt,
      title: meta.data.title,
      titleHead: meta.data.pageTitle,
      authors: meta.data.authors,
      date: meta.data.formationDate || undefined,
      where: meta.data.where || undefined,
      doctype: meta.data.doctype,
    };
  });

  return (
    <>
      <Head>
        <title>{pageMetadata.title}</title>
      </Head>
      <Layout metadata={pageMetadata}>
        <div className={`${css.article_wraper} flex`}>
          {cardData.map((card) => (
            <DocCard data={card} key={card.key} />
          ))}
        </div>
      </Layout>
    </>
  );
}

function DocCard({ data }) {
  const isKnownDoctype = docTypeValue[data.doctype] !== undefined;
  return (
    <>
      <article className={`${css.download_article} flex`}>
        <section className={`${css.download_section} flex`}>
          <h1 className={css.articleName}>
            <Link href={data.articlePath}>
              <a className={css.link}>{data.titleHead}</a>
            </Link>
          </h1>

          <div className={`${css.download_link_container} flex`}>
            <figure className={`${css.cardFigure} flex`}>
              <img
                className={`${css.round}`}
                src={data.logo}
                alt={data.logoAltTxt}
                width="130"
              />
              <figcaption className={`${css.cardDescription} flex`}>
                <h2 className={`${css.titleMargin}`}>
                  <Link href={data.articlePath}>
                    <a className={`${css.link_to_article}`}>{data.title}</a>
                  </Link>
                </h2>

                <h3 className={`${css.Author}`}>{data.authors}</h3>
                <small className={`${css.smallInfoStyle}`}>
                  {data.date
                    ? (() => (
                        <>
                          {"Le "}
                          <Date dateString={data.date} />{" "}
                        </>
                      ))()
                    : "Date non définie "}
                  {data.date && data.where
                    ? `sur ${data.where}`
                    : "Lieu non définie"}
                </small>
              </figcaption>

              <div className={`${css.button_container}  flex`}>
                <div className={`${css.btn_links_parent} flex`}>
                  <Link href={data.dLink}>
                    <a className={`${css.downloadBtn} ${css.btn_links} flex`}>
                      <i className="fas fa-download"></i>
                      <span className={`${css.btn_text}`}>Télécharger</span>
                    </a>
                  </Link>

                  <IncludeIf condition={isKnownDoctype}>
                    <Link href={data.readLink}>
                      <a className={`${css.openBtn} ${css.btn_links} flex`}>
                        <i className="fab fa-readme"></i>
                        <span className={`${css.btn_text}`}>
                          {docTypeValue[data.doctype]}
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
