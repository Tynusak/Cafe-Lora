import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { name, image, layers } = props;
  let { ordered } = props;
  const drinkElement = document.createElement('div');
  drinkElement.classList.add('drink');
  drinkElement.innerHTML = `<div class="drink__product">
  <div class="drink__cup">
    <img
      src="${image}"
    />
  </div>
  <div class="drink__info">
    <h3>${name}</h3>
  </div>
</div>
<div class="drink__controls">
  <button class="order-btn">Objednat</button>
</div>`;

  layers.forEach(
    (item) =>
      (drinkElement.querySelector('.drink__info').innerHTML += Layer(item)),
  );

  const orderButton = drinkElement.querySelector('.order-btn');
  orderButton.addEventListener('click', () => {
    if (!ordered) {
      orderButton.textContent = 'Zrušit';
      drinkElement
        .querySelector('.drink__cup')
        .classList.add('drink__cup--selected');
      ordered = true;
    } else {
      orderButton.textContent = 'Objednat';
      drinkElement
        .querySelector('.drink__cup')
        .classList.remove('drink__cup--selected');
      ordered = false;
    }
  });

  return drinkElement;
};
