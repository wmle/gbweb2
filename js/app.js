const buttonOpenNav = document.querySelectorAll('.header__item-button');
const buttonCloseNav = document.querySelector('.main__menu-close');
const menuNav = document.querySelector('.main__menu');

buttonOpenNav[1].onclick = () => {
    menuNav.classList.remove('main-close');
    menuNav.classList.add('main-active');
}
buttonCloseNav.onclick = () => {
    menuNav.classList.remove('main-active');
    menuNav.classList.add('main-close');
}

// buttonOpenNav[1].onclick = () => menuNav.classList.toggle('main__menu-active');
// buttonCloseNav.onclick = () => menuNav.classList.remove('main__menu-active');

// buttonOpenNav[1].onclick = () => menuNav.classList.toggle('main-active');


// buttonOpenNav[1].onclick = () => {
//     menuNav.classList.remove('main-close');
//     // menuNav.style.display = 'block';
//     menuNav.classList.add('main-active');
// }
// buttonCloseNav.onclick = () => {
//     menuNav.classList.remove('main-active');
//     menuNav.classList.add('main-close');
// }



// buttonOpenNav[1].onclick = () => menuNav.style.display = 'block';
// buttonCloseNav.onclick = () => menuNav.style.display = 'none';


// buttonOpenNav[1].onclick = () => menuNav.classList.add('main__menu-open');
// buttonCloseNav.onclick = () => menuNav.classList.add('main__menu-close');
