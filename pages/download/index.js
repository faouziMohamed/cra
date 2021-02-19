import Head from "next/head";
import Link from "next/link";
import Layout, { IncludeIf } from "../../components/mainLayout";

import css from "../../components/styles/download.module.css";
export default function Download() {
  const metadata = {
    title: "Téléchargement",
    authors: "cra",
    description: "Page de téléchargement",
    keywords: "Download, téléchargement",
    pageTitle: "Téléchargement",
    pageSubtitle: "Tous les téléchargements",
    path: "/download",
    ogImg: "/images/dwIcons/acem-logo-white.svg",
  };
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Layout metadata={metadata}>
        <div className={`${css.article_wraper} flex`}>
          <DownloadArticles
            dlink="/dw/f/git-github"
            logo={"/images/dwIcons/git-github-img.svg"}
            logoAltTxt={"Git GitHub icon"}
            title={"Introduction sur Git et GitHub"}
            titleHead={"Git et GitHub"}
            author={"Faouzi Mohamed"}
            date={"Le 21/02/2021 sur Google Meet à 16h30"}
            /* logo={"/images/dwIcons/acem-logo-white.svg"} */
          />
          <DownloadArticles
            dlink={"/dw/f/powerpoint"}
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

function DownloadArticles({ dlink, title, author, date, logo, titleHead }) {
  return (
    <>
      <article className={`${css.download_article} flex`}>
        <section className={`${css.download_section} flex`}>
          <h1 className={css.articleName}>
            <Link href={dlink}>
              <a className={css.link}>{titleHead}</a>
            </Link>
          </h1>
          <Link href={dlink}>
            <a className={`${css.download_link_container} flex`}>
              <figure className={`${css.cardFigure} flex`}>
                <img
                  className={`${css.round} css.noRadius`}
                  src={logo}
                  width="130"
                />
                <figcaption className={`${css.cardDescription} flex`}>
                  <h2 className={`${css.titleMargin}`}>{title}</h2>
                  <h3 className={`${css.Author}`}>{author}</h3>
                  <small className={`${css.smallInfoStyle}`}>{date}</small>
                </figcaption>
              </figure>
            </a>
          </Link>
        </section>
      </article>
    </>
  );
}
