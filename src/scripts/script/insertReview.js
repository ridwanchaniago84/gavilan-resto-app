/* eslint-disable consistent-return */
import $ from 'jquery';
import { insertDataReview } from '../data/dataRestaurant';
import loading from './loading';
import UrlParser from '../routes/urlParser';
import renderPage from '../views/pages/sectionArray';
import notif from './notif';

const checkResponseAPI = (data) => {
  if (data.error === false) {
    return data;
  }
};

const resetInput = () => {
  $('#nama').val('');
  $('#ulasan').val('');
};

const responseFromAPI = async (data) => {
  await checkResponseAPI(data);

  await renderPage('review');
  resetInput();

  notif('Ulasan berhasil ditambahkan!');
  return loading(false);
};

const sendDataArray = async (data) => {
  const sendData = await insertDataReview(data);

  return responseFromAPI(sendData);
};

const insertReview = () => {
  const addBtnElement = document.querySelector('#btnReview');

  addBtnElement.addEventListener('click', async () => {
    loading(true);

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const inputNama = $('#nama').val();
    const inputUlasan = $('#ulasan').val();

    if (inputNama === '') {
      $('#nama').focus();

      notif('Nama tidak boleh kosong!');
      return loading(false);
    }

    if (inputUlasan === '') {
      $('#ulasan').focus();

      notif('Ulasan tidak boleh kosong!');
      return loading(false);
    }

    if (inputNama != null || inputUlasan != null) {
      const data = {
        id: url.id,
        name: inputNama,
        review: inputUlasan,
      };

      return sendDataArray(data);
    }
  });
};

export default insertReview;
