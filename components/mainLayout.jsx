import Head from "next/head";

import BottomNavigation from "./bottomNavigation";
import Footer from "./footer";
import TableOfContent from "./tableOfContent";
import LeftBurgerButton from "./burgerBtn";
import Header from "./header";
import { useEffect, useState } from "react";
export function IncludeIf({ condition, children }) {
  return condition && <>{children}</>;
}

export default function Layout({ article, children, metadata, navigation }) {
  const { pageTitle, pageSubtitle, path } = metadata;
  metadata.ogImg || (metadata.ogImg = "/images/dwIcons/acem-logo-white.svg");
  const COMPLETE_URL = `https://cra-acem.tech${path}`;
  const isTrue = article !== undefined;
  let [title, setTitle] = useState(metadata.title);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content={metadata.authors} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />
        <meta name="color-scheme" content="dark light" />
        <meta name="theme-color" content="#4285f4" />
        <link rel="canonical" href={COMPLETE_URL} />
        <meta property="og:url" content={COMPLETE_URL} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImg} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="fr_FR" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <noscript>
          <link rel="stylesheet" href="/css/noscript.css" />
        </noscript>
        {/* {setTitle(metadata.title)} */}
      </Head>
      <Header />
      <IncludeIf condition={isTrue}>
        <LeftBurgerButton />
      </IncludeIf>
      <main className="app-content main-content flex">
        <IncludeIf condition={isTrue}>
          <TableOfContent />
        </IncludeIf>

        <div className="content-wrapper">
          <article className="main-article flex">
            <PageHeader titles={{ title: pageTitle, subTitle: pageSubtitle }} />

            {children}

            <IncludeIf condition={isTrue}>
              <BottomNavigation navigation={navigation} />
            </IncludeIf>

            <Footer />
          </article>
        </div>
      </main>
      <a href="#top" className="to-top"></a>
      <noscript>
        <div className="noscript-layout">
          <p className="no-script-text">
            <i className="fas fa-exclamation-triangle"></i>
            <span>La page web fonctionne bien avec javascript activé</span>
          </p>
        </div>
      </noscript>
    </>
  );
}

export function PageHeader({ titles }) {
  return (
    <header className="main-header">
      <h1 className="main-title">{titles.title}</h1>
      <p className="main-sub-title">{titles.subTitle}</p>
    </header>
  );
}
