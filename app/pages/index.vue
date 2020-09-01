<template>
  <div>
    <client-only>
      <swiper class="top-swiper" :options="topSwiperOption">
        <swiper-slide
          v-for="(item, i) in items"
          :key="i"
        >
          <img class="top-img" :src="item.src" alt="kv">
          <v-btn outlined class="view-btn">view</v-btn>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      </swiper>
    </client-only>
    <div class="container__header">
      <h1 class="title"><ruby><rb>COFFEEl</rb><rt>コーフィール</rt></ruby>でコーヒーがもっと好きになる</h1>
      <p class="sub-title">お気に入りのコーヒーが見つかるシェアサービス</p>
      <v-btn x-large class="background-color-secondary" depressed style="max-width: 300px; margin: 20px 0">コーヒーをさがす</v-btn>
    </div>
    <div class="container__content">
      <h2 class="sub-title sub-title--dark">Pickup！</h2>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      const items = [
        {
          src: require('~/assets/images/kv1.jpeg'),
        },
        {
          src: require('~/assets/images/kv2.jpeg'),
        },
        {
          src: require('~/assets/images/kv3.jpeg'),
        },
        {
          src: require('~/assets/images/kv4.jpeg'),
        },
      ]
      return {
        items,
        topSwiperOption: {
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet(i, className) {
              return `
                <div class="${className}">
                  <img src="${items[i].src}" alt="kv" class="thumb"></img>
                </div>
              `
            }
          },
        },
      }
    }
  }
</script>

<style scoped>
  .view-btn {
    position: absolute;
    background: #fff !important;
    color: rgb(110, 110, 110);
    z-index: 100;
    top: 300px;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  .top-swiper {
    position: relative;
    height: 430px;
    background: #000;
  }
  .top-img {
    width: 100%;
    height: 430px;
    object-fit: cover;
    opacity: .7;
  }
  .swiper-pagination {
    background-color: rgba(0,0,0,.2);
    display: flex;
    height: 56px;
    justify-content: center;
    position: absolute;
    bottom: 0;
  }
  .swiper-pagination >>> .swiper-pagination-bullet-active {
    background-color: white !important;
  }
  .swiper-pagination >>> .swiper-pagination-bullet {
    background-color: transparent;
    padding: 11px;
    margin: 0;
    height: 56px;
    width: 95px;
    border-radius: 0;
  }
  .swiper-pagination >>> .swiper-pagination-bullet:hover {
    transition: background-color .2s;
    background: #000;
  }
  .swiper-pagination >>> .thumb {
    object-fit: cover;
    border-radius: 2px;
    height: 34px;
    width: 60px;
  }
  .container__header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
  }
  .title {
    text-align: center;
    font-size: 26px;
    letter-spacing: .08em;
  }
  .sub-title {
    text-align: center;
    color: #757575;
    font-size: 16px;
    margin: 10px 0;
  }
  .sub-title--dark {
    font-size: 18px;
    font-weight: bold;
  }
  .item-swiper {
    margin: 50px 0;
    height: 450px;
  }
</style>