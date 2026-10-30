import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem('pikaboo');
const setupStore = (products) => {
  store = products.map((oneProduct) => {
    const {
      id,
      fields: { company, colors, featured, price, name, image: img },
    } = oneProduct;
    const image = img[0].thumbnails.large.url;
    return { id, company, name, colors, featured, price, image };
  });
  setStorageItem('pikaboo', store);
};

const findProduct = () => {};
export { store, setupStore, findProduct };
