import './style.css';
import { Layer } from './Layer/index.js';

document.querySelector('#nav-btn').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

const hamburgerMenu = document.querySelectorAll('a');
for (let i = 0; i < hamburgerMenu.length; i++) {
  hamburgerMenu[i].addEventListener('click', () => {
    document.querySelector('nav').classList.add('nav-closed');
  });
}
let ordered = false;
const orderButton = document.querySelector('.order-btn');

orderButton.addEventListener('click', () => {
  if (!ordered) {
    orderButton.textContent = 'Zrušit';
    document.querySelector('.drink__cup').classList.add('drink__cup--selected');
    ordered = true;
  } else {
    orderButton.textContent = 'Objednat';
    document
      .querySelector('.drink__cup')
      .classList.remove('drink__cup--selected');
    ordered = false;
  }
});

//Komponenta
const drinkLayers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'expresso',
  },
];

for (let i = 0; i < drinkLayers.length; i++) {
  document.querySelector('.drink__info').innerHTML += Layer(drinkLayers[i]);
}
