const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});

close.addEventListener('click', () => {
    menu.classList.remove('active')
});

const counters = document.querySelectorAll('.using__loader__header-procenntage'),
    lines = document.querySelectorAll('.using__loader-linefull');
counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML; 
});
