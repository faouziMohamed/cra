/* eslint-disable import/newline-after-import */
import Head from "next/head";

import Header from "../components/header";
import { PageHeader } from "../components/mainLayout";

const metadata = {
  title: "Page not found | CRA",
  authors: "cra",
  description: "Error 404,  Page not Found",
  keywords: "error, false route, page not found, 404",
  pageTitle: "404",
  pageSubtitle: "Vous venez de prendre une route qui n'existe pas",
  path: "/404",
  ogImg: "/images/404.png",
  doctype: "error",
};
export default function NotFound() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Header metadata={metadata} />
      <div className="root" id="app">
        <main
          className="app-content main-content flex"
          style={{
            height: "100%",
            margin: "auto",
          }}>
          <section
            className="main-article flex"
            style={{
              width: "100%",
              height: "100%",
              margin: "auto",
              position: "relative",
            }}>
            <img
              src={`/images/404.svg`}
              width={450}
              height={350}
              style={{ width: "100%", height: "auto", maxWidth: "450px" }}
              alt={"404 page not found"}
            />
            {/* <div>
              <p>{"Vous venez de prendre une route qui n'existe pas"}</p>
            </div> */}
            <PageHeader titles={metadata} />
          </section>
        </main>
      </div>
    </>
  );
}
