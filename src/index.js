'use strict';

import './style.css';
import Hero from './restaurant_hero.jpeg';
import * as buildShell from './buildDOM';
import { buildHero } from './buildHome';

const footerCopy = 'Faux Taux Aups © created by Jake Abed circa 2023';

buildShell.checkContent();

buildShell.buildHeader('FAUX TAUX AUPS');

buildShell
    .contentDiv
    .appendChild(buildHero(Hero, 'Text Alt Text', 'Fake Food For Fake Folks'));

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