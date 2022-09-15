const navbar = document.querySelector('.nav-bar');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.hamburger-menu');

function show() {
  navbar.classList.toggle('visible');
  closeMenu.style.display = 'flex';
}

function close() {
  navbar.classList.remove('visible');
  closeMenu.style.display = 'none';
}

function removeVisible() {
  if (window.innerWidth > 768) {
    navbar.classList.remove('visible');
    closeMenu.style.display = 'none';
  } else if (window.innerWidth < 768) {
    closeMenu.style.display = 'flex';
  }
}

window.onresize = removeVisible;
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
navbar.addEventListener('click', close);