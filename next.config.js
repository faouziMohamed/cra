const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const ghPages = process.env.DEPLOY_TARGET === "gh-pages";

module.exports = withPlugins([
  [optimizedImages, {}],

  {
    async redirects() {
      return [
        {
          source: "/about",
          destination: "/home",
          permanent: false,
        },
      ];
    },
    async rewrites() {
      return [
        {
          source: "/home",
          destination: "/",
        },
        {
          source: "/formations",
          destination: "/formations/git-github",
        },
        {
          source: "/formation",
          destination: "/formations/git-github",
        },
        {
          source: "/dw/f/git-github",
          destination:
            "https://1drv.ms/p/s!Am4xVXV1LqvLrnACo-IRGQDOHx_7?e=4AVfID",
        },
        {
          source: "/dw/f/powerpoint",
          destination:
            "https://1drv.ms/p/s!Am4xVXV1LqvLomzt5Z_a0slnIQGj?e=2t5mOZ",
        },
      ];
    },
    assetPrefix: ghPages ? "/cra-k.github.io/" : "",
  },
]);
