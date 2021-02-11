import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html className="theme-light" lang="fr">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <script type="module" src="/js/main.js" async></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
