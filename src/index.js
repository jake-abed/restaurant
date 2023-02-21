'use strict';

import './style.css';
import * as buildDOM from './buildDOM';

buildDOM.checkContent();

buildDOM.appendH1('Hi Mom!', buildDOM.contentDiv);

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