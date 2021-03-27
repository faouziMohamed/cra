import Link from "next/link";

import { craSocialLinks } from "../lib/utils";

export default function Header() {
  return (
    <>
      <header className="app-header">
        <nav className="app-header-nav flex">
          <Link href="/home">
            <a className="app-header-left-items flex">
              <HeaderLogo />
            </a>
          </Link>

          <div className="app-header-right-items-parent flex">
            <HeaderLeftItems />
          </div>
        </nav>
      </header>
    </>
  );
}

function HeaderLogo() {
  return (
    <>
      <img src="/images/cra-icon.png" alt="CRA's logo" className="acem-icon" />
      <div className="app-nav-title flex">
        <span className="app-nav-title-item cra">CRA</span>
        <span className="app-nav-title-item acem">ACEM</span>
        <span className="app-nav-title-item kenitra">KENITRA</span>
      </div>
    </>
  );
}

function HeaderLeftItems() {
  return (
    <div className="app-header-right-items flex">
      <label id="switch" className="switch flex">
        <input type="checkbox" id="slider" className="hidden" />
        <span className="slider round flex"></span>
      </label>
      <div className="app-header-social-container">
        <a href="https://github.com/cra-k">
          <i className="fab fa-github-square app-header-social up app-header-github-icon"></i>
        </a>
        <a href="https://www.facebook.com/Club-de-Recherches-Acad%C3%A9miques-310130176356323/">
          <i className="fab fa-facebook-square app-header-social up app-header-facebook-icon"></i>
        </a>
        <i className="fas fa-phone-square-alt app-header-social up app-header-phone-call-icon">
          <address className="phone-number-in-header">0652-032558</address>
        </i>
      </div>
    </div>
  );
}
