/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/init/likeBTN';
import restoFavoriteDB from '../../src/scripts/data/restoFavoriteDB';

const createLikeButtonPresenterWithRestaurant = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: restoFavoriteDB,
    resto,
  });
};

export { createLikeButtonPresenterWithRestaurant };
