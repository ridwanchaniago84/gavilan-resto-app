import listRestaurant from '../views/pages/listRestaurant';
import detailRestaurant from '../views/pages/detailRestorant';
import favoriteRestorant from '../views/pages/favoritRestoran';

const routes = {
  '/': listRestaurant,
  '/detail/:id': detailRestaurant,
  '/favorite': favoriteRestorant,
};

export default routes;
