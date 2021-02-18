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
                        "https://drive.google.com/file/d/1GykWDVhNLJTBcwOr0tNIWJlFQ019-9_9/view",
                },
            ];
        },
        assetPrefix: ghPages ? "/cra-k.github.io/" : "",
    },
]);
