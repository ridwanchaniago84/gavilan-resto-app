/* eslint-disable no-undef */
import restoFavoriteDB from '../src/scripts/data/restoFavoriteDB';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="tandai favorite"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="hilang tanda favorite"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await restoFavoriteDB.getResto(1);

    expect(resto).toEqual({ id: 1 });

    restoFavoriteDB.deleteResto(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await restoFavoriteDB.putResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await restoFavoriteDB.getAllResto()).toEqual([{ id: 1 }]);

    restoFavoriteDB.deleteResto(1);
  });

  it('should not add a movie when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await restoFavoriteDB.getAllResto()).toEqual([]);
  });
});
