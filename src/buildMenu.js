'use strict';

import StankPancakes from './images/stank-pancakes.jpg';
import DeconstructedBurger from './images/deconstructed-burger.jpg';
import IceCreamBalls from './images/ice-cream-balls.jpg'

const pictureDict = {
    'Ice Cream Balls': IceCreamBalls,
    'Stank Pancakes': StankPancakes,
    'Deconstructed Burger': DeconstructedBurger
}

function buildMenu(menuItems) {
    const SECTION = document.createElement('section'),
        H2 = document. createElement('h2');

    function buildMenuItem(menuItem) {
        const menuItemDiv = document.createElement('div');
        const menuItemName = document.createElement('h3');
        const menuItemDesc = document.createElement('p');
        const menuItemPrice = document.createElement('p');
        const menuItemImage = new Image();
        
        
        menuItemDiv.classList.add('menu-item');
        menuItemName.classList.add('menu-item-name');
        menuItemDesc.classList.add('menu-item-desc');
        menuItemPrice.classList.add('menu-item-price');
        menuItemImage.classList.add('menu-item-img');

        menuItemName.innerText = menuItem.name;
        menuItemDesc.innerText = menuItem.description;
        menuItemPrice.innerText = menuItem.price;
        menuItemImage.src = pictureDict[menuItem.imageReference];

        menuItemDiv.appendChild(menuItemName);
        menuItemDiv.appendChild(menuItemImage);
        menuItemDiv.appendChild(menuItemDesc);
        menuItemDiv.appendChild(menuItemPrice);
        
        return menuItemDiv;
    }

    SECTION.classList.add('menu');
    H2.classList.add('menu-title');
    H2.innerText = 'Our Current Offerings';
    SECTION.appendChild(H2);

    for (const menuItem of menuItems) {
        SECTION.appendChild(buildMenuItem(menuItem));
    }

    console.log('Menu section built!');
    return SECTION;
}

export {
    buildMenu
}