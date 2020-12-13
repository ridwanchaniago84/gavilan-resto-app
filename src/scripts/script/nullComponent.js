import loading from './loading';
import { nullPage } from '../views/template/dinamisComponent';

const nullFavorite = (restorElement, message) => {
  const elementContainer = restorElement;
  elementContainer.innerHTML = nullPage(message);

  return loading(false);
};

export default nullFavorite;
