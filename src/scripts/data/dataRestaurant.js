import endPoint from '../globals/endPoint';
import config from '../globals/config';
import loading from '../script/loading';
import UrlParser from '../routes/urlParser';
import notif from '../script/notif';

const insertDataReview = async (data) => {
  try {
    const insertData = await fetch(endPoint.insertReview, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': config.apiKey,
      },
      body: JSON.stringify(data),
    });

    const response = await insertData.json();

    return response;
  } catch {
    notif('Periksa koneksi internet Anda!');

    return loading(false);
  }
};

const allDataRestaurant = async () => {
  loading(true);

  try {
    const response = await fetch(endPoint.listRestaurant);
    const responseJson = await response.json();

    return responseJson.restaurants;
  } catch {
    notif('Periksa koneksi internet Anda!');

    return loading(false);
  }
};

const detailRestorant = async (id) => {
  loading(true);

  try {
    const response = await fetch(endPoint.detail(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
  } catch {
    notif('Periksa koneksi internet Anda!');

    return loading(false);
  }
};

const getRestoDataByUrl = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const resto = await detailRestorant(url.id);
  return resto;
};

const foodMenus = async () => {
  const resto = await getRestoDataByUrl();
  return resto.menus.foods;
};

const drinkMenus = async () => {
  const resto = await getRestoDataByUrl();
  return resto.menus.drinks;
};

const categories = async () => {
  const resto = await getRestoDataByUrl();
  return resto.categories;
};

const reviews = async () => {
  const resto = await getRestoDataByUrl();
  return resto.customerReviews;
};

export {
  insertDataReview,
  reviews,
  categories,
  foodMenus,
  drinkMenus,
  allDataRestaurant,
  getRestoDataByUrl,
};
