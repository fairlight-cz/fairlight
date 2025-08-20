'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
    const links = document.getElementsByClassName('contact-link');

    for (let i = 0; i < links.length; i++) {
        let a = links.item(i);
        a.setAttribute('href', a.getAttribute('href')
            .replace('-', 'ontact@')
            .replace('/', 'fairlight.cz')
            .replace('to', 'mailto:c')
        );
        if (a.classList.contains('email-link')) a.innerHTML = a.getAttribute('href').replace('mailto:', '');
    }
});