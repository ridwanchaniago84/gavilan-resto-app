import $ from 'jquery';

const notifHide = () => {
  const mainElement = document.querySelector('main');

  mainElement.addEventListener('click', () => $('.notif').fadeOut('slow'));
};

const notif = async (msg) => {
  $('#notif').html(msg);
  $('.notif').fadeIn();

  return notifHide();
};

export default notif;
