import Head from "next/head";

export default function HeadData({ metadata }) {
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
        <link rel="stylesheet" href="./styles/noscript.css" />
      </noscript>
    </Head>
  );
}
