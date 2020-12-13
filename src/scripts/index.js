import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './script/nav';
import './component/loadingComponent';
import renderPage from './views/app';
import swRegister from './init/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

window.addEventListener('hashchange', () => {
  renderPage();
});

window.addEventListener('load', () => {
  renderPage();
  swRegister();
});
