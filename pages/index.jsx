import Head from "next/head";
import Header from "../components/header";
export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>Club de Recherche Académique</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="author" content="Faouzi Mohamed" />
                <meta
                    name="keywords"
                    content="Introduction, club de recherche, ACEM, etudiant"
                />
                <meta name="color-scheme" content="dark light" />
                <noscript>
                    <link rel="stylesheet" href="../styles/noscript.css" />
                </noscript>
            </Head>
            <Header />
            <div classnames={`root`} id="app"></div>
        </>
    );
}
