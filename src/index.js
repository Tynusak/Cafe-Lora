import './style.css';
import { Drink } from './Drink/index.js';

document.querySelector('#nav-btn').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

const hamburgerMenu = document.querySelectorAll('a');
for (let i = 0; i < hamburgerMenu.length; i++) {
  hamburgerMenu[i].addEventListener('click', () => {
    document.querySelector('nav').classList.add('nav-closed');
  });
}
const drink = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};
document.querySelector('.drinks-list').appendChild(Drink(drink));

// let ordered = false;
// const orderButton = document.querySelector('.order-btn');

// orderButton.addEventListener('click', () => {
//   if (!ordered) {
//     orderButton.textContent = 'Zrušit';
//     document.querySelector('.drink__cup').classList.add('drink__cup--selected');
//     ordered = true;
//   } else {
//     orderButton.textContent = 'Objednat';
//     document
//       .querySelector('.drink__cup')
//       .classList.remove('drink__cup--selected');
//     ordered = false;
//   }
// });
