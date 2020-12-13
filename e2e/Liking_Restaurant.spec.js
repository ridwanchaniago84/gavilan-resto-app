/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('Liking favorite restaurant', async ({ I }) => {
  I.seeElement('.null-page');
  I.see('Tidak ada yang restoran yang tersimpan!', '.null-page');

  I.amOnPage('');

  I.scrollTo('.card-content');
  I.seeElement('.card-content');

  const elementFirstRestaurantName = locate('.card-content h2').first();
  const firstRestaurantName = await I.grabTextFrom(elementFirstRestaurantName);

  const fiveSecond = 5;

  const firstDetailRestaurantButton = locate('.card-content a').first();
  I.waitForClickable(firstDetailRestaurantButton, fiveSecond);
  I.click(firstDetailRestaurantButton);

  I.seeElement('#likeButton');
  I.waitForClickable('#likeButton', fiveSecond);
  I.click('#likeButton');

  I.amOnPage('#/favorite');

  I.seeElement('.card-content h2');

  const firstFavoriteRestaurantName = await I.grabTextFrom(elementFirstRestaurantName);

  assert.strictEqual(firstRestaurantName, firstFavoriteRestaurantName);
});

Scenario('Unliking favorite restaurant', async ({ I }) => {
  I.seeElement('.null-page');
  I.see('Tidak ada yang restoran yang tersimpan!', '.null-page');

  I.amOnPage('');

  I.scrollTo('.card-content');
  I.seeElement('.card-content');

  const fiveSecond = 5;

  const firstDetailRestaurantButton = locate('.card-content a').first();
  I.waitForClickable(firstDetailRestaurantButton, fiveSecond);
  I.click(firstDetailRestaurantButton);

  I.seeElement('#likeButton');
  I.waitForClickable('#likeButton', fiveSecond);
  I.click('#likeButton');

  I.amOnPage('#/favorite');

  I.seeElement('.card-content');

  I.waitForClickable(firstDetailRestaurantButton, fiveSecond);
  I.click(firstDetailRestaurantButton);

  I.seeElement('.dislike');
  I.waitForClickable('.dislike', fiveSecond);
  I.click('.dislike');

  I.amOnPage('#/favorite');

  I.seeElement('.null-page');
  I.see('Tidak ada yang restoran yang tersimpan!', '.null-page');
});

Scenario('Adding review restaurant', async ({ I }) => {
  I.seeElement('.null-page');
  I.see('Tidak ada yang restoran yang tersimpan!', '.null-page');

  I.amOnPage('');

  I.scrollTo('.card-content');
  I.seeElement('.card-content');

  const fiveSecond = 5;

  const firstDetailRestaurantButton = locate('.card-content a').first();
  I.waitForClickable(firstDetailRestaurantButton, fiveSecond);
  I.click(firstDetailRestaurantButton);

  I.wait(fiveSecond);

  I.scrollTo('.commentar-input');
  I.seeElement('.commentar-input');

  const userName = 'Edward';
  const reviewUser = 'Review E2E';

  I.fillField('nama', userName);
  I.fillField('Ulasan', reviewUser);

  I.waitForClickable('#btnReview', fiveSecond);
  I.click('#btnReview');

  I.wait(fiveSecond);
  const elementLastSavedUserName = locate('.review-data h3').last();
  const elementLastSavedReview = locate('.review-data .review').last();

  const lastSavedUserName = await I.grabTextFrom(elementLastSavedUserName);
  const lastSavedReview = await I.grabTextFrom(elementLastSavedReview);

  assert.strictEqual(lastSavedUserName, userName);
  assert.strictEqual(lastSavedReview, reviewUser);
});
