const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

let d = new Date();
document.getElementById("currentYear").innerHTML = `${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

date.textContent = date.las