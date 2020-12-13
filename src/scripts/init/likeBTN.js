import restoFavoriteDB from '../data/restoFavoriteDB';
import { likeButtonTemplate, likedButtonTemplate } from '../views/template/dinamisComponent';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, favoriteRestaurant, resto }) {
    this.likeButtonContainer = likeButtonContainer;
    this.resto = resto;
    this.favoriteRestaurant = favoriteRestaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.resto;

    if (await this.isRestoExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isRestoExist(id) {
    const resto = await restoFavoriteDB.getResto(id);
    return !!resto;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = likeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await restoFavoriteDB.putResto(this.resto);
      this.renderButton();
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = likedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await restoFavoriteDB.deleteResto(this.resto.id);
      this.renderButton();
    });
  },
};

export default LikeButtonInitiator;
