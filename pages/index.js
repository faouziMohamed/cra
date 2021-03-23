import Head from "next/head";
import Link from "next/link";

import { PageContentData, useThemes } from "../components/articleLayout";
// import BottomNavigation from "../components/bottomNavigation";
import Carousel from "../components/Carousel";
import Footer from "../components/footer";
import HeadData from "../components/HeadData";
import Header from "../components/header";
import { PageContent } from "../components/mainLayout";
import Noscript from "../components/Noscript";
import TimeLine from "../components/timeline/timeline";
import { getAllFomationsMetadata, getHomePageData } from "../lib/posts";
import style from "./index.module.css";

export function getStaticProps() {
  const { pageMetadata, pageContent } = getHomePageData();
  return {
    props: {
      metadata: pageMetadata,
      data: pageContent,
      formationsMetadata: getAllFomationsMetadata(),
      navigation: {
        prev: "/#",
        next: "/formations",
      },
    },
  };
}

export default function LandPage({ metadata, data, formationsMetadata }) {
  useThemes();
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/index.carousel.module.css"
        />
      </Head>
      <HeadData metadata={metadata} />
      <Header metadata={metadata} />
      <div className="root" id="app">
        <main className={`app-content main-content flex`}>
          <div className={`${style.home_content_wrapper} `}>
            <span id="top"></span>
            <HomePageRow1 metadata={metadata} />
            <HomePageRow2 />
            <HomePageRow3 data={formationsMetadata} />
            <HomePageRow4 data={data} />
            {/* TODO: Add timeline for events here */}
            {/* Events are Webinars or Formations */}
          </div>
        </main>
        <Noscript />
      </div>
    </>
  );
}

function HomePageRow1({ metadata }) {
  return (
    <div className={`${style.landpage_row_1} landpage_row_1`}>
      <div className={`${style.row_1_container}`}>
        <Carousel />
        <section className={`${style.row_1_data}`}>
          <header className={`${style.main_header}`}>
            <h1 className={`${style.main_title}`}>{metadata.pageTitle}</h1>
            <p className={`${style.main_sub_title}`}>{metadata.pageSubtitle}</p>
          </header>
          <section className={`${style.home_top_section}`}>
            <p className={`${style.home_top_content}`}>
              Le Club de Recherche Académique (CRA) est fondé en 2019 par l’ACEM
              section de Kénitra. Il a pour but premier d’apporter de l’aide
              dans les études aux étudiants, stagiaires et employés
              comorien·ne·s qui se trouvent aux Maroc.
            </p>
            <div className={`${style.home_top_links_container}`}>
              <ul className={`${style.home_top_links_list}`}>
                <li className={`${style.home_top_link_item}`}>
                  <Link href="/formations">
                    <a className={`${style.home_top_link}`}>Formations</a>
                  </Link>
                </li>
                <li className={`${style.home_top_link_item}`}>
                  <Link href="/formations">
                    <a className={`${style.home_top_link}`}>Webinaires</a>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

function HomePageRow2() {
  return <CovidAlerte />;
}

function HomePageRow3({ data }) {
  return (
    <div className={`${style.timeline_wrapper}`}>
      <TimeLine data={data} />
    </div>
  );
}
function HomePageRow4({ data }) {
  return (
    <div className={`${style.landpage_row_2}`}>
      <div className={`${style.landpage_row_2_content_wrapper}`}>
        <article className="main-article flex">
          {/* <PageContent>
            <PageContentData data={data} />
          </PageContent> */}
          <Footer />
          <a className="to-top" alt="Monter en haut de la page" href="#top">
            {""}
          </a>
        </article>
      </div>
    </div>
  );
}

function CovidAlerte() {
  return (
    <section className={`${style.covid_alerte_section}`}>
      <h2 className={`${style.covid_alerte_title}`}>
        <i
          className={`fad fa-virus-slash ${style.covid_alerte_title_icon}`}></i>
        <span className={`${style.covid_alerte_title_text}`}>
          Protegez-vous contre le Corona Virus (Covid 19), mettez un masque,
          sauvez des vies
        </span>
      </h2>
      <div className={`${style.covid_alerte_list_item_container}`}>
        <div className={`${style.covid_alerte_list_item_container_pos}`}>
          <ul className={`${style.covid_alerte_list_item}`}>
            <li className={`${style.covid_alerte_item}`}>
              <i
                className={`fad fa-head-side-mask ${style.covid_alerte_item_text}`}></i>
              <span className={`${style.covid_alerte_item_text}`}>
                Mettez un masque
              </span>
            </li>
            <li className={`${style.covid_alerte_item}`}>
              <i
                className={`fad fa-hands-wash ${style.covid_alerte_item_text}`}></i>
              <span className={`${style.covid_alerte_item_text}`}>
                Lavez régulièrement vos mains
              </span>
            </li>
            <li className={`${style.covid_alerte_item}`}>
              <i
                className={`fad fa-people-arrows ${style.covid_alerte_item_text}`}></i>
              <span className={`${style.covid_alerte_item_text}`}>
                Garder une distance de sécurité
              </span>
            </li>
          </ul>
          <a
            href="https://www.who.int/fr/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub"
            className={`${style.covid_more_info_btn}`}>
            <i
              className={`fas fa-info-circle ${style.covid_more_info_btn_icon}`}></i>
            <span className={`${style.covid_more_info_btn_text}`}>
              Plus d&apos; informations
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

// export function Home({ metadata, data, navigation }) {
//   return (
//     <>
//       <ArticleLayout metadata={metadata} data={data} navigation={navigation} />
//     </>
//   );
// }
