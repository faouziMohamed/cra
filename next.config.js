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
        assetPrefix: ghPages ? "/cra-k.github.io/" : "", // customize this value
        // exportPathMap: function () {
        //     return {
        //         "/": { page: "/" },
        //         "/about": { page: "/" },
        //         "/home": { page: "/" },
        //         "/formation": { page: "/formations/git-github" },
        //         "/formations": { page: "/formations/git-github" },
        //     };
        // },
        // assetPrefix: !debug ? "/cra-web-page/" : "",
        // webpack(config, { dev }) {
        //     // Perform customizations to webpack config
        //     config.module.rules = config.module.rules.map((rule) => {
        //         if (rule.loader === "babel-loader") {
        //             rule.options.cacheDirectory = false;
        //         }
        //         return rule;
        //     });
        //     // Important: return the modified config
        //     return config;
        // },
    },
]);
