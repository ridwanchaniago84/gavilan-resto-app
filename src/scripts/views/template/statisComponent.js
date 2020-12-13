const indexPageComponent = () => `
    <section id="tentang">
        <div class="container">
            <h1 class="title-content">SELAMAT DATANG</h1>
            <hr class="section-header" />
            <div class="content-about">
                <p>Selamat datang di website Gavilan Resto App, website kami memberikan informasi tentang restoran
                    baik itu dalam maupun luar negeri. Jadi Anda tidak perlu mengecek satu-satu restoran yang akan
                    dipilih.
                    Jangan lupa untuk melihat restoran yang kami sarankan dan tekan tombol detail untuk melihat lebih lanjut.</p>
                <img alt="dinner" src="./images/image/about.png" />
            </div>
        </div>
    </section>
    <section id="katalog">
        <div class="container">
            <h1 class="title-content">REKOMENDASI RESTORAN</h1>
            <hr class="section-header" />
            <div class="content" id="content-container"></div>
        </div>
    </section>
`;

const detailPageComponent = () => `
    <section id="katalog">
        <div class="container">
            <h1 class="title-content">DETAIL RESTORAN</h1>
            <hr class="section-header" />
            <div class="content-detail" id="content-container"></div>
        </div>
    </section>
    <div id="likeButtonContainer"></div>
`;

const favoritePageComponent = () => `
    <section id="katalog">
        <div class="container">
            <h1 class="title-content">RESTORAN FAVORITE</h1>
            <hr class="section-header" />
            <div class="content" id="content-container"></div>
        </div>
    </section>
`;

export {
  favoritePageComponent,
  indexPageComponent,
  detailPageComponent,
};
