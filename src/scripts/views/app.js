import UrlParser from '../routes/urlParser';
import routes from '../routes/routes';

const renderPage = async () => {
  const mainElement = document.querySelector('#mainContent');

  const url = UrlParser.parseActiveUrlWithCombiner();
  const page = routes[url];
  mainElement.innerHTML = await page.render();
  await page.afterRender();
};

export default renderPage;
