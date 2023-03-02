'use strict';

import { randomReviews } from "./data/randomReviews";
import { randomIndexUpTo } from "./utils";

function buildAboutUs(copy, imageLink, imageAlt) {
    const SECTION =  document.createElement('section'),
        ABOUT_DIV = document.createElement('div'),
        H2 = document.createElement('h2'),
        COPY = document.createElement('p'),
        REVIEW_DIV = document.createElement('div'),
        REVIEW_BODY = document.createElement('p'),
        REVIEWER_NAME = document.createElement('p'),
        RANDOM_REVIEW = randomReviews[randomIndexUpTo(randomReviews.length)];

    H2.innerText = 'About Us';
    COPY.innerText = copy;
    ABOUT_DIV.appendChild(H2);
    ABOUT_DIV.appendChild(COPY)
    REVIEW_BODY.innerText = RANDOM_REVIEW.review;
    REVIEWER_NAME.innerText = RANDOM_REVIEW.name;
    REVIEW_DIV.appendChild(REVIEW_BODY);
    REVIEW_DIV.appendChild(REVIEWER_NAME);
    SECTION.appendChild(ABOUT_DIV);
    SECTION.appendChild(REVIEW_DIV);
    SECTION.classList.add('about');
    console.log(`About us page with review from ${RANDOM_REVIEW.name} built.`);
    return SECTION;
}

export {
    buildAboutUs
}