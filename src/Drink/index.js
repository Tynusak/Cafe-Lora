import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { name, image, layers } = props;
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

  return drinkElement;
};
