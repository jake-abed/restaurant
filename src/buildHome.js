import { contentDiv } from "./buildDOM";

function buildHero(imageLink, altText, copy) {
    const SECTION = document.createElement('section'),
        IMAGE = document.createElement('img'),
        HERO_COPY = document.createElement('div');
    
    SECTION.classList.add('hero');
    IMAGE.setAttribute('src', imageLink);
    IMAGE.setAttribute('alt', altText);
    HERO_COPY.classList.add('hero-copy');
    HERO_COPY.innerText = copy;

    SECTION.appendChild(IMAGE);
    SECTION.appendChild(HERO_COPY);
    console.log(`Hero with copy ${copy} created!`)
    return SECTION;
}

export {
    buildHero
}