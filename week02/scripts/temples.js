const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    `Last Modified: ${document.lastModified}`;