const triggerBtn = document.querySelector('#hamburger');
const mobileNav = document.querySelector('#nav-mobile');
const main = document.querySelector('main');

triggerBtn.addEventListener('click', (event) => {
  mobileNav.classList.toggle('open');
  event.stopPropagation();
});

main.addEventListener('click', (event) => {
  mobileNav.classList.remove('open');
  event.stopPropagation();
});
