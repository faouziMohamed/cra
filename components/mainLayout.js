import "swiper/swiper-bundle.css";

import BottomNavigation from "./bottomNavigation";
import LeftBurgerButton from "./burgerBtn";
import Carousel from "./Carousel";
import Footer from "./footer";
import HeadData from "./HeadData";
import Header from "./header";
import Noscript from "./Noscript";
import PageHeader from "./PageHeader";
import TableOfContent from "./tableOfContent";

export default function Layout({ article, children, metadata, navigation }) {
  const isArticle = article !== undefined;
  return (
    <>
      <div className="root" id="app">
        <HeadData metadata={metadata} />
        <Header />
        <LeftBurgerButton isArticle={isArticle} />
        <main className="app-content main-content flex">
          <TableOfContent isArticle={isArticle} />
          <div className="content-wrapper">
            <span id="top"></span>
            <article className="main-article flex">
              <PageHeader titles={metadata} />
              <PageContent>{children}</PageContent>
              <BottomNavigation navigation={navigation} isArticle={isArticle} />
              <Footer />
              <IncludeIf condition={isArticle}>
                <a
                  className="to-top"
                  alt="Monter en haut de la page"
                  href="#top">
                  {/* {""} */}
                </a>
              </IncludeIf>
            </article>
          </div>
        </main>
        <Noscript />
      </div>
    </>
  );
}

export function PageContent({ children }) {
  return <>{children}</>;
}

export function IncludeIf({ condition, children }) {
  return condition && <>{children}</>;
}
