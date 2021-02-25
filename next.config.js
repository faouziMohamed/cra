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
      ];
    },
    async rewrites() {
      return [...internals.links, ...externals.downloads, ...externals.read];
    },
    assetPrefix: ghPages ? "/cra-k.github.io/" : "",
  },
]);
