import { allDataRestaurant } from '../../data/dataRestaurant';
import { indexPageComponent } from '../template/statisComponent';
import { indexItemPage } from '../template/dinamisComponent';
import loading from '../../script/loading';
import nullFavorite from '../../script/nullComponent';

const listRestaurant = {
  async render() {
    return indexPageComponent();
  },

  async afterRender() {
    const dataRestor = await allDataRestaurant();
    const restorElement = document.querySelector('#content-container');

    if (!dataRestor.length) {
      const message = 'Data restoran kosong!';
      return nullFavorite(restorElement, message);
    }

    dataRestor.forEach((resto) => {
      restorElement.innerHTML += indexItemPage(resto);
    });

    return loading(false);
  },

};

export default listRestaurant;
