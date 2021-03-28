import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

import Date from "../../components/date";
import Layout, { IncludeIf } from "../../components/mainLayout";
import css from "../../components/styles/articles.module.css";
import { getAllArticlesMetadata, getPageMetadata } from "../../lib/posts";
import enableThemes from "../../lib/themes";

export function getStaticProps() {
  return {
    props: {
      metadata: getAllArticlesMetadata(),
      pageMetadata: getPageMetadata("articles", "articles.yaml"),
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
      links: {
        read: {
          pdf: `/doc-pdf/f/${meta.id.slice(-1)}`,
          ppt: `/doc-ppt/f/${meta.id.slice(-1)}`,
          word: `/doc-word/f/${meta.id.slice(-1)}`,
          video: `/video/f/${meta.id.slice(-1)}`,
        },
      },
      articlePath: `${meta.id.join("/")}`,
      logo:
        meta.data.articleType === "Webinaire"
          ? `/images/cra-icon-white.png`
          : `/images/cra-icon-white.png`,
      logoAltTxt: meta.data.logoAltTxt,
      title: meta.data.title,
      titleHead: meta.data.pageTitle,
      authors: meta.data.authors,
      date: meta.data.formationDate || false,
      where: meta.data.where || false,
      doctypes: (meta.data.doctypes && meta.data.doctypes.split(";")) || false,
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
  const docTypeValue = {
    ppt: { text: "Slide", icon: "fas fa-file-powerpoint" },
    word: { text: "Word", icon: "fas fa-file-word" },
    pdf: { text: "Pdf", icon: "fas fa-file-pdf" },
    video: { text: "Video", icon: "fas fa-video" },
  };

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
            <div className={`${css.cardFigure} flex`}>
              <Link href={data.articlePath}>
                <a className={`${css.download_link}`}>
                  <img
                    className={
                      data.doctypes
                        ? `${css.logo_img}`
                        : `${css.logo_img_bigger}`
                    }
                    src={data.logo}
                    alt={data.logoAltTxt}
                    width="130"
                  />
                </a>
              </Link>
              <section className={`${css.cardDescription} flex`}>
                <h2 className={`${css.titleMargin} ${css.formation_title}`}>
                  <Link href={data.articlePath}>
                    <a className={`${css.link_to_article}`}>{data.title}</a>
                  </Link>
                </h2>

                <h3 className={`${css.author}`}>
                  <address>{data.authors}</address>
                </h3>
                <small className={`${css.smallInfoStyle}`}>
                  {data.date
                    ? (() => (
                        <>
                          {"Le "}
                          <Date dateString={data.date} />
                        </>
                      ))()
                    : "Date non définie "}
                  {data.date && data.where
                    ? `sur ${data.where}`
                    : "Lieu non définie"}
                </small>
              </section>
              <IncludeIf condition={data.doctypes}>
                <LinkToFilesSection data={data} docTypeValue={docTypeValue} />
              </IncludeIf>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
function LinkToFilesSection({ data, docTypeValue }) {
  return (
    <div className={`${css.links_label_container}  flex`}>
      <div className={`${css.links_label_1st_innerWrapper} flex`}>
        <div className={`${css.links_label_2nd_innerWrapper} flex`}>
          <p className={`${css.read_dw_label}`}>Lire/Télécharger</p>
          <div className={`${css.link_container} flex`}>
            {data.doctypes.map((doctype) => (
              <IncludeIf condition={doctype in docTypeValue} key={doctype}>
                <Link href={data.links.read[doctype]}>
                  <a className={`${css.btn_links} flex`}>
                    <i className={`${docTypeValue[doctype].icon}`}></i>
                    <span className={`${css.btn_text}`}>
                      {docTypeValue[doctype].text}
                    </span>
                  </a>
                </Link>
              </IncludeIf>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
