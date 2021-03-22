import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

import ArticleLayout, {
  PageContentData,
  useThemes,
} from "../components/articleLayout";
// import BottomNavigation from "../components/bottomNavigation";
import Carousel from "../components/Carousel";
import Footer from "../components/footer";
import HeadData from "../components/HeadData";
import Header from "../components/header";
import { PageContent } from "../components/mainLayout";
import Noscript from "../components/Noscript";
import PageHeader from "../components/PageHeader";
import { getHomePageData } from "../lib/posts";
import css from "./404.module.css";
import style from "./index.module.css";

export function getStaticProps() {
  const { pageMetadata, pageContent } = getHomePageData();
  return {
    props: {
      metadata: pageMetadata,
      data: pageContent,
      navigation: {
        prev: "/#",
        next: "/formations",
      },
    },
  };
}

export default function LandPage({ metadata, data, navigation }) {
  useThemes();
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <HeadData metadata={metadata} />
      <Header metadata={metadata} />
      <div className="root" id="app">
        <main className={`${css.main_wrapper} app-content main-content flex`}>
          <div
            className={`content-wrapper ${style.content_wrapper_has_carousel} `}>
            <span id="top"></span>
            <div className={`${style.landpage_row_1} landpage_row_1`}>
              <div className={`${style.row_1_container}`}>
                <Carousel />
                <div className={`${style.row_1_data}`}>
                  <header className={`${style.main_header}`}>
                    <h1 className={`${style.main_title}`}>
                      {metadata.pageTitle}
                    </h1>
                    <p className={`${style.main_sub_title}`}>
                      {metadata.pageSubtitle}
                    </p>
                  </header>
                  {/* <PageHeader titles={metadata} /> */}
                  <PageContent>
                    {/* <PageContentData data={data} /> */}
                    <section className={`${style.home_top_section}`}>
                      <p className={`${style.home_top_content}`}>
                        Le Club de Recherche Académique (CRA) est un club fondé
                        en 2019 par l’ACEM section de Kénitra. Ce club a pour
                        but premier d’apporter de l’aide dans les études aux
                        étudiants, stagiaires et employés comorien·ne·s qui se
                        trouvent aux Maroc.
                      </p>
                      <div className={`${style.home_top_links_container}`}>
                        <ul className={`${style.home_top_links_list}`}>
                          <li className={`${style.home_top_link_item}`}>
                            <Link href="/formations">
                              <a className={`${style.home_top_link}`}>
                                Formations
                              </a>
                            </Link>
                          </li>
                          <li className={`${style.home_top_link_item}`}>
                            <Link href="/formations">
                              <a className={`${style.home_top_link}`}>
                                Webinaires
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </PageContent>
                </div>
              </div>
            </div>

            <section
              className="alerte-section"
              style={{ backgroundColor: "red" }}>
              <h2>Protegez-vous contre le Covid </h2>
            </section>
            {/* <article className="main-article flex">
              <PageContent>
                <PageContentData data={data} />
              </PageContent>
              <BottomNavigation navigation={navigation} isArticle={isArticle} />
              <Footer />
              <a className="to-top" alt="Monter en haut de la page" href="#top">
                {""}
              </a>
            </article> */}
          </div>
        </main>
        <Noscript />
      </div>
    </>
  );
}

export function Home({ metadata, data, navigation }) {
  return (
    <>
      <ArticleLayout metadata={metadata} data={data} navigation={navigation} />
    </>
  );
}
