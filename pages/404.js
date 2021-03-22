/* eslint-disable import/newline-after-import */
import Head from "next/head";

import { useThemes } from "../components/articleLayout";
import HeadData from "../components/HeadData";
import Header from "../components/header";
import PageHeader from "../components/PageHeader";
import css from "./404.module.css";

const metadata = {
  title: "Page not found | CRA",
  authors: "cra",
  description: "Error 404,  Page not Found",
  keywords: "error, false route, page not found, 404",
  pageTitle: "404",
  pageSubtitle: "Vous venez de prendre une route qui n'existe pas",
  path: "/404",
  ogImg: "/images/404.png",
};

export default function NotFound() {
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
          <section className={`${css.main_section} main-article flex `}>
            <img
              data-theme={"switch"}
              className={`${css.tired_img_server}`}
              src={`/images/404-dark.svg`}
              width={450}
              height={350}
              alt={"404 page not found"}
            />
            <PageHeader titles={metadata} />
          </section>
        </main>
      </div>
    </>
  );
}
