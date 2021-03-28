import Link from "next/link";

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
  let copieToClipboard = async () => {
    if (!navigator.clipboard) {
      return;
    }
    const text = document.querySelector("#phone-number").dataset.phoneNumber;
    try {
      await navigator.clipboard.writeText(text);
      document.querySelector(".copied").classList.add("active");
    } catch (err) {
      () => {};
    }
  };

  return (
    <div className="app-header-right-items flex">
      <label
        id="switch"
        className="switch flex"
        style={{ visibility: "visible" }}>
        <input type="checkbox" id="slider" className="hidden" />
        <span className="slider round flex"></span>
      </label>
      <div className="app-header-social-container">
        <Link href="https://github.com/cra-k">
          <a className="app-header-social up app-header-github-icon">
            <i className="fab fa-github-square"></i>
          </a>
        </Link>
        <Link href="https://www.facebook.com/Club-de-Recherches-Acad%C3%A9miques-310130176356323/">
          <a className="app-header-social up app-header-facebook-icon">
            <i className="fab fa-facebook-square "></i>
          </a>
        </Link>
        <i
          className="fas fa-phone-square-alt app-header-social up app-header-phone-call-icon"
          aria-hidden="true"
          onClick={copieToClipboard}
          title="Cliquez pour copier le numéro de téléphone">
          <address
            id="phone-number"
            className="phone-number-in-header"
            data-phone-number="+212652032558">
            <i className=" copied fas fa-check-circle"> Copié</i>
            (212) 652-032 558
          </address>
        </i>
      </div>
    </div>
  );
}
