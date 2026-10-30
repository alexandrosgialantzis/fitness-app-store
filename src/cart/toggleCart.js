import { getElement } from '../utils.js';

const cardOverlay = document.querySelector('.cart-overlay');
const closeCartBtn = document.querySelector('.cart-close');
const toggleCartBtn = document.querySelector('.toggle-cart');

toggleCartBtn.addEventListener('click', () => {
  cardOverlay.classList.add('show');
});
closeCartBtn.addEventListener('click', () => {
  cardOverlay.classList.remove('show');
});

export const openCart = () => {
  cardOverlay.classList.add('show');
};
