import { enableThemes } from "./themes.js";

import { displayModalContent } from "./modals.js";

import { executeBody } from "./body.js";

void (function main() {
    // include("modals.js", true);
    enableThemes();
    displayModalContent();
    executeBody();
    // document.querySelector(
    //     ".app-footer-year"
    // ).innerText = new Date().getFullYear();
})();
