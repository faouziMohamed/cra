import { enableThemes } from "./themes.js";
import { displayModalContent } from "./modals.js";
import { executeBody } from "./body.js";

export default function main() {
    enableThemes();
    displayModalContent();
    executeBody();
}
