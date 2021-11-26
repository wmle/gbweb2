const buttonOpenNav = document.querySelectorAll('.header__item-button');
const buttonCloseNav = document.querySelector('.main__menu-close');
const menuNav = document.getElementsByClassName('main__menu')[0];

buttonOpenNav[1].onclick = () => menuNav.style.display = 'block';
buttonCloseNav.onclick = () => menuNav.style.display = 'none';





// buttonOpenNav[1].onclick = () => menuNav.classList.add('main__menu-open');
// buttonCloseNav.onclick = () => menuNav.classList.add('main__menu-close');


// const openModal = (triggerSelector, modalDataSelector) => { // объявляем функцию открытия модального окна, которая принимает в качестве параметров селекторы кнопки и соответствующего модального окна
//     const trigger = document.querySelector(triggerSelector) // ищем кнопку по переданному селектору
//     const modal = document.querySelector(modalDataSelector) // ищем модальное окно по переданному селектору
//     if (!trigger || !modal) return // если такая кнопка или модальное окно не найдены, то прекращаем работу функции
//     trigger.addEventListener('click', e => { // при клике на кнопку
//       e.preventDefault() // предотвращаем браузерные действия (если кнопка сделана через тег ссылки <a href=""></a>, то отменяется переход по ссылке)
//       modal.classList.add('modal_active') // отображаем модальное окно, добавив ему активный класс
//     })
//   }
//   openModal('.buttons__button_one', '.modal[data-modal="one"]') // Запускаем функцию и передаем селекторы для первого модального окна
//   openModal('.buttons__button_two', '.modal[data-modal="two"]') // Запускаем функцию и передаем селекторы для второго модального окна

//   const closeModal = () => { // объявляем функцию закрытия модального окна
//     const modals = document.querySelectorAll('.modal') // ищем все модальные окна
//     if (!modals) return // если их нет, то прекращаем выполнение функции
//     modals.forEach(el => { // если есть, то для каждого из них
//       el.addEventListener('click', e => { // при клике
//         if (e.target.closest('.modal__close')) { // если клик был клик на кнопке закрытия
//           el.classList.remove('modal_active') // то скрываем модальное окно, удаляя активный класс
//         }
//         if (!e.target.closest('.modal__body')) { // если клик был за пределами контентной части модального окна, то есть на затемненную область
//           el.classList.remove('modal_active') // то тоже скрываем модальное окно, удаляя активный класс
//         }
//       })
//     })
//   }
//   closeModal() // вызываем функцию закрытия
