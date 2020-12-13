import { getRestoDataByUrl } from '../../data/dataRestaurant';
import { detailPageComponent } from '../template/statisComponent';
import { detailRestorantPage } from '../template/dinamisComponent';
import renderPage from './sectionArray';
import loading from '../../script/loading';
import insertReview from '../../script/insertReview';
import LikeButtonInitiator from '../../init/likeBTN';

const detailRestaurant = {
  async render() {
    return detailPageComponent();
  },

  async afterRender() {
    const restorElement = document.querySelector('#content-container');
    const restoData = await getRestoDataByUrl();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: restoData.id,
        name: restoData.name,
        description: restoData.description,
        city: restoData.city,
        pictureId: restoData.pictureId,
        rating: restoData.rating,
      },
    });

    restorElement.innerHTML = detailRestorantPage(restoData);
    await renderPage('food');
    await renderPage('drink');
    await renderPage('categori');
    await renderPage('review');
    insertReview();

    return loading(false);
  },

};

export default detailRestaurant;
