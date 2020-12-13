import restoFavoriteDB from '../../data/restoFavoriteDB';
import { favoritePageComponent } from '../template/statisComponent';
import { indexItemPage } from '../template/dinamisComponent';
import loading from '../../script/loading';
import nullFavorite from '../../script/nullComponent';

const favoriteRestorant = {
  async render() {
    return favoritePageComponent();
  },

  async afterRender() {
    const dataRestor = await restoFavoriteDB.getAllResto();

    const restorElement = document.querySelector('#content-container');

    if (!dataRestor.length) {
      const message = 'Tidak ada yang restoran yang tersimpan!';
      return nullFavorite(restorElement, message);
    }

    dataRestor.forEach((resto) => {
      restorElement.innerHTML += indexItemPage(resto);
    });

    return loading(false);
  },

};

export default favoriteRestorant;
