const hambutton = document.querySelector('#hamburger');
const navElement = document.querySelector('#navbar');

hambutton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hambutton.classList.toggle('open');
});