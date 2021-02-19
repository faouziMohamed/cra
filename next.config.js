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
          source: "/read-doc/f/git-github",
          destination:
            "https://1drv.ms/p/s!Am4xVXV1LqvLrnACo-IRGQDOHx_7?e=4AVfID",
        },
        {
          source: "/download-doc/f/git-github",
          destination:
            "https://onedrive.live.com/redir?resid=CBAB2E757555316E%216000&authkey=%21AAKj4hEZAM4fH_s&page=Download",
        },
        {
          source: "/read-doc/f/powerpoint",
          destination:
            "https://1drv.ms/p/s!Am4xVXV1LqvLomzt5Z_a0slnIQGj?e=2t5mOZ",
        },
        {
          source: "/download-doc/f/powerpoint",
          destination:
            "https://onedrive.live.com/redir?resid=CBAB2E757555316E%214460&authkey=%21AO3ln9rSyWchAaM&page=Download",
        },
      ];
    },
    assetPrefix: ghPages ? "/cra-k.github.io/" : "",
  },
]);
