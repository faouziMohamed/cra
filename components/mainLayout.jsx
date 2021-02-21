import Head from "next/head";

import BottomNavigation from "./bottomNavigation";
import LeftBurgerButton from "./burgerBtn";
import Footer from "./footer";
import Header from "./header";
import TableOfContent from "./tableOfContent";

export default function Layout({ article, children, metadata, navigation }) {
  const isArticle = article !== undefined;
  return (
    <>
      <HeadData metadata={metadata} />
      <Header />
      <LeftBurgerButton isArticle={isArticle} />
      <main className="app-content main-content flex">
        <TableOfContent isArticle={isArticle} />
        <div className="content-wrapper">
          <span id="top"></span>
          <article className="main-article flex">
            <PageHeader titles={metadata} />
            {children}
            <BottomNavigation navigation={navigation} isArticle={isArticle} />
            <Footer />
            <IncludeIf condition={isArticle}>
              <a className="to-top" alt="Monter en haut de la page" href="#top">
                {""}
              </a>
            </IncludeIf>
          </article>
        </div>
      </main>
      <Noscript />
    </>
  );
}

function HeadData({ metadata }) {
  metadata.ogImg || (metadata.ogImg = "/images/dwIcons/acem-logo-white.svg");
  const { path } = metadata;
  const COMPLETE_URL = `https://cra-acem.tech${path}`;
  return (
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
        <link rel="stylesheet" href="./style/noscript.css" />
      </noscript>
    </Head>
  );
}

function PageHeader({ titles }) {
  return (
    <header className="main-header">
      <h1 className="main-title">{titles.pageTitle}</h1>
      <p className="main-sub-title">{titles.pageSubtitle}</p>
    </header>
  );
}

function Noscript() {
  return (
    <noscript>
      <div className="noscript-layout">
        <p className="no-script-text">
          <i className="fas fa-exclamation-triangle"></i>
          <span>La page web fonctionne bien avec javascript activé</span>
        </p>
      </div>
    </noscript>
  );
}

export function IncludeIf({ condition, children }) {
  return condition && <>{children}</>;
}
