import config from '../../globals/config';

const indexItemPage = (restoData) => `
    <div class="card">
        <div class="city">
            <div class="container-city">
                <p>${restoData.city}</p>
            </div>
        </div>
        <div style="position: relative;">
            <div style="background-color: #f1f1f1; width: 100%;
            border-radius: 5px;
            height: 300px; position: absolute;"></div>
        </div>
        <img class="lazyload" data-src="${config.baseImageUrl}${restoData.pictureId}" alt="${restoData.name}" crossorigin="anonymous" />
        <div class="card-content">
            <span>Rating: ${restoData.rating}</span>
            <h2>${restoData.name}</h2>
            <p>${restoData.description}</p>
            <a href="#/detail/${restoData.id}">
                <button aria-label="detail ${restoData.name}">Detail</button>
            </a>
        </div>
    </div>
`;

const detailRestorantPage = (restoData) => `
    <div class="card">
        <div class="city">
            <div class="container-city">
                <p>Rating: ${restoData.rating}</p>
            </div>
        </div>
        <img src="${config.baseImageUrl}${restoData.pictureId}" alt="${restoData.name}" crossorigin="anonymous" />
        <div class="card-content">
            <h2>${restoData.name}</h2>
            <p>Alamat: ${restoData.address}, ${restoData.city}</p>
            <p>${restoData.description}</p>
        </div>
        <div class="commentar">
            <div class="card-content">
                <h2>Ulasan</h2>
                <div class="container-review" id="review"></div>
            </div>
        </div>
        <div class="commentar-input">
            <div class="card-content">
                <h2>Beri ulasan</h2>
                <div class="input-group">
                    <input type="text" name="nama" id="nama" placeholder="Nama" aria-label="Nama Anda" />
                    <textarea placeholder="Ulasan" name="ulasan" id="ulasan" aria-label="Isi ulasan"></textarea>
                    <button aria-label="Kirim ulasan" id="btnReview">Kirim ulasan</button>
                </div>
            </div>
        </div>
    </div>
    <div id="sidebar">
        <div class="square-information">
            <div class="container-information">
                <h2>Menu Makanan</h2>
                <ul class="menu" id="food-menu"></ul>
            </div>
        </div>
        <div class="square-information">
            <div class="container-information">
                <h2>Menu Minuman</h2>
                <ul class="menu" id="drink-menu"></ul>
            </div>
        </div>
        <div class="square-information">
            <div class="container-information">
                <h2>Kategori</h2>
                <div class="grid-kategori" id="side-kategori"></div>
            </div>
        </div>
    </div>
`;

const menu = (food) => `
    <li>${food.name}</li>
`;

const renderCategori = (categori) => `
    <p class="square-category">${categori.name}</p>
`;

const renderReview = (review) => `
    <div class="photo">
        <img src="./images/image/profile.png" alt="photo profile" />
    </div>
    <div class="review-data">
        <h3>${review.name}</h3>
        <p style="color: #bebebe; font-size: 15px; margin-top: -20px;">${review.date}</p>
        <p class="review">${review.review}</p>
    </div>
`;

const likeButtonTemplate = () => `
  <button aria-label="tandai favorite" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const likedButtonTemplate = () => `
  <button aria-label="hilang tanda favorite" id="likeButton" class="like dislike">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const nullPage = (message) => `<h2 class="null-page">${message}</h2>`;

export {
  likeButtonTemplate,
  likedButtonTemplate,
  renderReview,
  renderCategori,
  menu,
  indexItemPage,
  detailRestorantPage,
  nullPage,
};
