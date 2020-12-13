import {
  foodMenus, drinkMenus, categories, reviews,
} from '../../data/dataRestaurant';
import { menu, renderCategori, renderReview } from '../template/dinamisComponent';
import splitArray from '../../script/splitArray';

const renderPage = async (section) => {
  let dataArray = '';
  let renderElement = '';
  let templateRender = '';

  if (section === 'food') {
    dataArray = await foodMenus();
    renderElement = document.querySelector('#food-menu');
    templateRender = menu;
  } else if (section === 'drink') {
    dataArray = await drinkMenus();
    renderElement = document.querySelector('#drink-menu');
    templateRender = menu;
  } else if (section === 'categori') {
    dataArray = await categories();
    renderElement = document.querySelector('#side-kategori');
    templateRender = renderCategori;
  } else if (section === 'review') {
    dataArray = await reviews();
    renderElement = document.querySelector('#review');
    templateRender = renderReview;
  }

  splitArray({
    arrayData: dataArray,
    elementRender: renderElement,
    renderTemplate: templateRender,
  });
};

export default renderPage;
