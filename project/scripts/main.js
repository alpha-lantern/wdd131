// ALL GREAT & SMALL WHISKERS PAGES
// Select the DOM element for output
// DATES
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

// HAMBURGER MENU
const menu = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menu.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menu.classList.toggle('open');
});

// Date object
const today = new Date();

currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;
