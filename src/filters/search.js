import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
  const form = getElement('.input-form');
  const nameInput = getElement('.search-input');
  form.addEventListener('keyup', function () {
    const value = nameInput.value;
    if (value) {
      const newStore = store.filter((productFilter) => {
        let { name } = productFilter;
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return productFilter;
        }
      });
      display(newStore, getElement('.products-container'));
      if (newStore.length < 1) {
        const products = getElement('.products-container');
        products.innerHTML = `<h3 class="filter-error">no prod matched</h3>`;
      }
    } else {
      display(store, getElement('.products-container'));
    }
    console.log(value);
  });
};

export default setupSearch;
