import "../styles/main.css";
import { useEffect } from "react";
import main from "../js/main";

function App({ Component, pageProps }) {
    useEffect(() => {
        main();
    });

    return <Component {...pageProps} />;
}

export default App;
