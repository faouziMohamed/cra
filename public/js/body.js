function newTxtNode(text) {
    return document.createTextNode(text);
}

function handleEmptyLinks() {
    document.querySelectorAll("a[href='#']").forEach((a) => {
        a.addEventListener("click", (e) => {
            e.preventDefault();
        });
    });
}

function addLiToUl(ul, node, id) {
    node.id = id;
    let a = newElement(
        "a",
        {
            href: "#" + id,
        },
        node.innerText
    );
    let li = newElement("li");
    li.appendChild(a);
    ul.appendChild(li);
    return li;
}

function createListLeftNav() {
    let ul = document.querySelector("#table-of-content-list");
    let title = document.querySelectorAll(".text-title");
    let node = null,
        n = 1,
        id = null,
        li = null;
    let ul_ = null,
        li_ = null,
        _ul = null,
        c = title.length;
    /*For H1*/
    let H1 = document.querySelector(".main-title");
    if (!(H1 && ul)) {
        return;
    }
    H1.id = "top-h1";

    let h2 = newElement("h2", {
        style: "text-align:left; font-size:110%; margin-left:0px",
    });
    h2.appendChild(
        newElement(
            "a",
            {
                style: "text-decoration:none; color:lightgreen;",
                href: "#top-h1",
            },
            document.querySelector(".main-title").firstChild.data
        )
    );
    // ul.parentNode.insertBefore(h2, ul);
    /*Main loop to create the list of title in the left side of the webpage*/
    for (let i = 0; i < c; ++i) {
        /*For H2*/
        if (title[Number(i)].nodeName === "H2") {
            li = addLiToUl(ul, title[i++], "titre" + n++);
            ul_ = newElement("ul");
        }
        /*For H3*/
        while (i < c && title[Number(i)].nodeName === "H3") {
            li_ = addLiToUl(ul_, title[i++], "titre" + n++);
        }
        /*For H4*/
        if (i < c && title[Number(i)].nodeName === "H4") {
            _ul = newElement("ul");
            while (i < c && title[Number(i)].nodeName === "H4") {
                addLiToUl(_ul, title[i++], "titre" + n++);
            }
            li_.appendChild(_ul);
            --i;
        } else {
            i--;
        }
        li.appendChild(ul_);
    }
}

function configureBurgerMenu() {
    let burgerCheck = document.querySelector(".burger-check");
    let tableOfCOntent = document.querySelector(".app-table-of-content");
    let mainContentContainer = document.querySelector(".content-wrapper");
    if (!(burgerCheck && tableOfCOntent)) {
        return;
    }

    // Set closed by default the table of content when screen is less than 675px
    //burgerCheck is a checkbox hidden(input)
    burgerCheck.checked = false;
    // See definition of `table-of-content-closed` class in "../css/body.css"
    tableOfCOntent.classList.add("table-of-content-closed");

    //TOC = Table of Contents
    burgerCheck.addEventListener("change", function openCloseTOC() {
        tableOfCOntent.classList.toggle("table-of-content-closed");
    });

    if (mainContentContainer) {
        mainContentContainer.addEventListener("click", function closeTOC() {
            tableOfCOntent.classList.add("table-of-content-closed");
            burgerCheck.checked = false;
        });
    }
}
function appendScriptToBody(htmlDoc, fileName, isModule) {
    let doc = new DOMParser().parseFromString(htmlDoc, "text/html");

    let prefix = null,
        type = null;

    if (document.title !== doc.title) {
        prefix = "../js/";
    } else {
        prefix = "js/";
    }

    type = isModule === true ? "module" : "text/javascript";

    document.body.appendChild(
        newElement("script", {
            src: `${prefix}${fileName}`,
            type: `${type}`,
            defer: "true",
        })
    );
}
export function newElement(name, attributes = {}, text = "") {
    let node = document.createElement(name);
    const keys = Object.getOwnPropertyNames(attributes);
    keys.forEach((key) => {
        node.setAttribute(`${key}`, attributes[`${key}`]);
    });

    if (text) {
        node.appendChild(newTxtNode(text));
    }
    return node;
}

export function insertAfter(elToInsert, reference) {
    reference.parentNode.insertBefore(elToInsert, reference.nextSibling);
}

export function include(fileName, isModule = false) {
    let addJsNodeToHTML = async (file) => {
        fetch(file)
            .then((resolve) => {
                return resolve.text();
            })
            .then((htmlDoc) => {
                appendScriptToBody(htmlDoc, fileName, isModule);
            });
    };
    return addJsNodeToHTML("../index.html");
}

export function executeBody() {
    // createListLeftNav();
    handleEmptyLinks();
    configureBurgerMenu();
}
