'use strict';

const contentDiv = document.querySelector('#content');

function buildHeader(h1Copy) {
    const HEADER = document.createElement('header'),
        H1 = document.createElement('h1'),
        UL = document.createElement('ul');

    function createNavListItem(name, href) {
        const LI = document.createElement('li')
        const A = document.createElement('a');

        A.setAttribute('href', href);
        A.innerText = name;
    }
}

function checkContent() {
    console.log(contentDiv)
};

export {
    checkContent
}