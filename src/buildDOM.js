'use strict';

const contentDiv = document.querySelector("#content");
const bodyDiv = document.querySelector('.body');

function buildHeader(h1Copy) {
  const HEADER = document.createElement("header"),
    H1 = document.createElement("h1"),
    UL = document.createElement("ul");

  function createNavListItem(name, href, id) {
    const LI = document.createElement("li");
    const A = document.createElement("a");

    A.setAttribute("href", href);
    A.setAttribute('id', id);
    A.innerText = name;
    LI.appendChild(A);
    return LI;
  }
  H1.innerText = h1Copy;
  HEADER.appendChild(H1);
  UL.appendChild(createNavListItem("Home", "#", 'home'));
  UL.appendChild(createNavListItem("Menu", "#", 'menu'));
  UL.appendChild(createNavListItem("About Us", '#', 'about'));
  HEADER.appendChild(UL);
  contentDiv.appendChild(HEADER);
  return console.log(`Header with H1 of ${h1Copy} Built`);
}

function buildBody() {
  const BODY = document.createElement('div');
  BODY.classList.add('body');
  contentDiv.appendChild(BODY);
  return console.log('Body DIV created in DOM');
}

function buildFooter(copy) {
  const FOOTER = document.createElement('footer'),
    P = document.createElement('p');

  P.innerText = copy;
  FOOTER.appendChild(P);
  contentDiv.appendChild(FOOTER);
  return console.log(`Footer with copy of ${copy} created.`);
}

function deleteSection() {
  document.querySelector('section').remove();
}

function checkContent() {
  console.log(contentDiv);
}

export { checkContent, contentDiv, bodyDiv, buildBody, buildHeader, buildFooter, deleteSection };
