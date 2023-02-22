"use strict";

const contentDiv = document.querySelector("#content");

function buildHeader(h1Copy) {
  const HEADER = document.createElement("header"),
    H1 = document.createElement("h1"),
    UL = document.createElement("ul");

  function createNavListItem(name, href) {
    const LI = document.createElement("li");
    const A = document.createElement("a");

    A.setAttribute("href", href);
    A.innerText = name;
    LI.appendChild(A);
    return LI;
  }
  H1.innerText = h1Copy;
  HEADER.appendChild(H1);
  UL.appendChild(createNavListItem("Home", "#"));
  UL.appendChild(createNavListItem("Menu", "#"));
  UL.appendChild(createNavListItem("About Us", "#"));
  HEADER.appendChild(UL);
  contentDiv.appendChild(HEADER);
  return console.log(`Header with H1 of ${h1Copy} Built`);
}

function buildFooter(copy) {
  const FOOTER = document.createElement("footer"),
    P = document.createElement("p");

  P.innerText = copy;
  FOOTER.appendChild(P);
  contentDiv.appendChild(FOOTER);
  return console.log(`Footer with copy of ${copy} created.`);
}

function checkContent() {
  console.log(contentDiv);
}

export { checkContent, contentDiv, buildHeader, buildFooter };
