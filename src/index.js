'use strict';

import './style.css';
import Hero from './restaurant_hero.jpeg';
import * as buildShell from './buildDOM';
import { buildHero } from './buildHome';
import { buildAboutUs } from './aboutUs';

const footerCopy = 'Faux Taux Aups © created by Jake Abed circa 2023',
    aboutUsCopy = 'All of our food is fake. It is meant for you to take ' +
                  'photos of for social credit. Please stop eating the ' +
                  'food. We cannot afford another lawsuit. Our owner is ' +
                  'an idiot and clearly had a bad concept for a restaurant ' +
                  'why did I take this gig. I wanted to be an astronaut...';

buildShell.checkContent();

buildShell.buildHeader('FAUX TAUX AUPS');

buildShell
    .contentDiv
    .appendChild(buildHero(Hero, 'Text Alt Text', 'Fake Food For Fake Folks'));

buildShell.contentDiv.appendChild(buildAboutUs(aboutUsCopy));

buildShell.buildFooter(footerCopy);

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