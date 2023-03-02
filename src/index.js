'use strict';

import './style.css';
import Hero from './images/restaurant_hero.jpeg';
import StankPancakes from './images/stank-pancakes.jpg';
import DeconstructedBurger from './images/deconstructed-burger.jpg';
import IceCreamBalls from './images/ice-cream-balls.jpg'
import * as buildDOM from './buildDOM';
import { buildHero } from './buildHome';
import { buildMenu } from './buildMenu';
import { buildAboutUs } from './buildAboutUs';
import { menuItems } from './data/menuItemData';

const footerCopy = 'Faux Taux Aups © created by Jake Abed circa 2023',
    aboutUsCopy = 'All of our food is fake. It is meant for you to take ' +
                  'photos of for social credit. Please stop eating the ' +
                  'food. We cannot afford another lawsuit. Our owner is ' +
                  'an idiot and clearly had a bad concept for a restaurant ' +
                  'why did I take this gig. I wanted to be an astronaut...';

buildDOM.checkContent();

buildDOM.buildHeader('FAUX TAUX AUPS');

buildDOM.buildBody();

const bodyDiv = document.querySelector('.body');

bodyDiv
    .appendChild(buildHero(Hero, 'Text Alt Text', 'Fake Food For Fake Folks'));

buildDOM.buildFooter(footerCopy);

function loadHome() {
    if (document.querySelector('section.hero')) return console.log('Already on Home!');
    buildDOM.deleteSection();
    bodyDiv
        .appendChild(buildHero(Hero,
            'The hands of a chef assembling a mushroom-centric dish on a log.',
            'Fake Food For Fake Folks'));
    return console.log('Home loaded!');
}

function loadMenu() {
    if (document.querySelector('section.menu')) return console.log('Already on Menu!');
    buildDOM.deleteSection();
    bodyDiv
        .appendChild(buildMenu(menuItems));
    return console.log('Menu loaded, dummy!');
}

function loadAboutUs() {
    if (document.querySelector('section.about')) return console.log('Already on About Us!');
    buildDOM.deleteSection();
    bodyDiv
        .appendChild(buildAboutUs(aboutUsCopy));
    return console.log('About Us loaded, loser!');
}

document.querySelector('#home').addEventListener('click', loadHome);
document.querySelector('#menu').addEventListener('click', loadMenu);
document.querySelector('#about').addEventListener('click', loadAboutUs);

/*

<header>
    <h1>Faux Taux Aups</h1>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About Us</a></li>
    </ul>
</header>
<section class="hero">
    <img src="../src/restaurant_hero.jpeg" alt="A chef places mushrooms on a cross-section of log.">
    <div class="hero-copy">Fake Food For Fake Folks</div>
</section>
<footer>
    <p>Faux Taux Aups © created by Jake Abed circa 2023</p>
</footer>

*/