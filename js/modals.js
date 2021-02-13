import { newElement } from "./body.js";

function modalContent(img) {
    let modal = newElement("section", {
        class: "modal",
        style: "display:block",
    });
    let modalContent = newElement("div", {
        class: "modal-content",
    });
    let imgClone = img.cloneNode(true);
    //imgClone.setAttribute("data-theme","switch");
    let close = newElement("i", {
        class: "fas fa-close close",
    });
    close.addEventListener("click", () => {
        document.body.removeChild(modal);
    });
    modalContent.appendChild(close);
    modalContent.appendChild(imgClone);
    modal.appendChild(modalContent);
    return modal;
}

function displayModalContent() {
    document.querySelectorAll("figure img, figure svg").forEach((img) => {
        img.addEventListener("click", function () {
            document.body.appendChild(modalContent(this));
        });
    });
}

export { displayModalContent };
