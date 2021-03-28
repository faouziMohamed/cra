import Head from "next/head";
import { useEffect } from "react";

import Layout from "../../components/mainLayout";
import css from "../../components/styles/articles.module.css";
import enableThemes from "../../lib/themes";

const metadata = {
  title: "Introduction sur Git et GitHub | CRA",
  authors: "cra",
  description: "Le direct sur l'initiation de git et github",
  keywords: "direct, formations, workshop",
  pageTitle: "Direct : Initiation sur Git et GitHub",
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
          {/* TODO:
           * Make the page scrollable, Add option to make the direct private,
           * Add style configuration on css module for the webPage
           * Set the best size for embedded screen
           * make the site lite
           */}
          <iframe
            title="Meeting frame"
            id="direct-frame"
            allow="camera; microphone; fullscreen; display-capture"
            src="https://cra-acem.tech"
            style={{
              position: "fixed",
              top: "80px",
              left: 0,
              right: 0,
              width: "100vw",
              height: "87vh",
              border: "0px",
            }}
          />
        </div>
      </Layout>
    </>
  );
}
