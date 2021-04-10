const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const ghPages = process.env.DEPLOY_TARGET === "gh-pages";
const { externals, internals } = require("./Links/data");

module.exports = withPlugins([
  [optimizedImages, {}],

  {
    async redirects() {
      return [
        {
          source: "/about",
          destination: "/home",
          permanent: true,
        },
        {
          source: "/formations",
          destination: "/articles",
          permanent: true,
        },
        {
          source: "/direct",
          destination: "/home",
          permanent: false,
        },
        {
          source: "/acem-news",
          destination: "https://acemnews.000webhostapp.com/",
          permanent: true,
        },
      ];
    },
    async rewrites() {
      return [...internals.links, ...externals.links];
    },
    assetPrefix: ghPages ? "/cra-k.github.io/" : "",
  },
]);
