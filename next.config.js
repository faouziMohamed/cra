module.exports = {
    async rewrites() {
        return [
            {
                source: "/about",
                destination: "/",
            },
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
};
