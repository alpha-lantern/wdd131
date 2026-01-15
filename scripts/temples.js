const menu = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const header = document.querySelector('header');

menu.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menu.classList.toggle('open');
    header.classList.toggle('open');
});