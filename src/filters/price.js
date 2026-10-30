import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceValye = getElement('.price-value');

  let maxPrice = store.map((productPrice) => productPrice.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValye.textContent = `value:$${maxPrice}`;

  priceInput.addEventListener('input', function () {
    const valueOfFilter = parseInt(priceInput.value);
    priceValye.textContent = `value:$${valueOfFilter}`;
    let newStore = store.filter(
      (filterProduct) => filterProduct.price / 100 <= valueOfFilter,
    );
    display(newStore, getElement('.products-container'));
    if (newStore.length < 1) {
      const NoProducts = getElement('.products-container');
      NoProducts.innerHTML = `<h3 class="filter-error">sorry no prodcuts with that price</h3>`;
    }
  });
};

export default setupPrice;
