import $ from 'jquery';

const loading = (show) => {
  if (show === true) {
    $('loading-web').fadeIn();
    return;
  }
  $('loading-web').fadeOut();
};

export default loading;
