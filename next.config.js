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
            ];
        },
        assetPrefix: ghPages ? "/cra-k.github.io/" : "",
    },
]);
