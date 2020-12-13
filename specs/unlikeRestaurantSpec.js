/* eslint-disable no-undef */
import restoFavoriteDB from '../src/scripts/data/restoFavoriteDB';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await restoFavoriteDB.putResto({ id: 1 });
  });

  afterEach(async () => {
    await restoFavoriteDB.deleteResto(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="hilang tanda favorite"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="tandai favorite"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="hilang tanda favorite"]').dispatchEvent(new Event('click'));

    expect(await restoFavoriteDB.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // hapus dulu film dari daftar film yang disukai
    await restoFavoriteDB.deleteResto(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="hilang tanda favorite"]').dispatchEvent(new Event('click'));

    expect(await restoFavoriteDB.getAllResto()).toEqual([]);
  });
});
