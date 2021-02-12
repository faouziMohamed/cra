import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <span id="top"></span>
            <header className="app-header">
                <nav className="app-header-nav flex">
                    <Link href="/">
                        <a className="app-header-left-items flex">
                            <Image
                                priority
                                src="/images/cra-icon.png"
                                alt="CRA's logo"
                                className="acem-icon"
                                width="400"
                                height="400"
                            />
                            <div className="app-nav-title flex">
                                <span className="app-nav-title-item cra">
                                    CRA
                                </span>
                                <span className="app-nav-title-item acem">
                                    ACEM
                                </span>
                                <span className="app-nav-title-item kenitra">
                                    KENITRA
                                </span>
                            </div>
                        </a>
                    </Link>

                    <div className="app-header-right-items-parent flex">
                        <div className="app-header-right-items flex">
                            <label id="switch" className="switch flex">
                                <input
                                    type="checkbox"
                                    id="slider"
                                    className="hidden"
                                />
                                <span className="slider round flex"></span>
                            </label>
                            <Link href="https://github.com/arcAcemK/cra-cr">
                                <a
                                    className="app-header-github-btn"
                                    id="app-github-link"
                                >
                                    <i className="app-header-github-icon fab fa-github"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
