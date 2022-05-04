import './style.css';

console.log('funguju!');
document.querySelector('#nav-btn').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

const hamburgerMenu = document.querySelectorAll('a');
for (let i = 0; i < hamburgerMenu.length; i++) {
  hamburgerMenu[i].addEventListener('click', () => {
    document.querySelector('nav').classList.add('nav-closed');
  });
}
