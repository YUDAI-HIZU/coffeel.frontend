<template>
  <div>
    <client-only>
      <swiper class="top-swiper" :options="topSwiperOption">
        <swiper-slide
          v-for="(item, i) in items"
          :key="i"
        >
          <img class="top-img" :src="item.src" alt="kv">
          <!-- <v-btn outlined class="view-btn">view</v-btn> -->
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      </swiper>
    </client-only>
    <div class="container__header">
      <h1 class="site-title title"><ruby><rb>COFFEEl</rb><rt>コーフィール</rt></ruby>でコーヒーがもっと好きになる</h1>
      <p class="site-sub-title">お気に入りのコーヒーが見つかるシェアサービス</p>
      <v-btn x-large class="background-color-secondary" to="/items" depressed style="margin: 20px 0">コーヒーをさがす</v-btn>
    </div>
    <div class="container__content">
      <div class="content-title">
        <h2 class="site-sub-title site-sub-title--dark pl-20">Pickup！</h2>
        <v-btn depressed large to="/sign-in" style="font-weight: bold; width: 100%; text-transform: none; color: #17a9da; background: #fff; width: 150px; margin-left:auto;">
          もっと見る ＞
        </v-btn>
      </div>
      <div class="content-items" style="margin: 10px 0; display: flex; justify-content: center; flex-wrap: wrap;">
        <AppCard/>
        <AppCard/>
        <AppCard/>
        <AppCard/>
      </div>
    </div>
    <v-row no-gutters class="container__content">
      <v-col cols="12" md="8" lg="8" justify="center">
        <div class="content-title">
          <h2 class="site-sub-title site-sub-title--dark pl-20">おすすめCafe!</h2>
          <v-btn depressed large to="/sign-in" style="font-weight: bold; width: 100%; text-transform: none; color: #17a9da; background: #fff; width: 150px; margin-left:auto;">
            もっと見る ＞
          </v-btn>
        </div>
        <v-row no-gutters>
          <v-col cols="12" md="6" lg="6">
            <AppHorizontalCard/>
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <AppHorizontalCard/>
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <AppHorizontalCard/>
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <AppHorizontalCard/>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" lg="4" justify="center">
        <div class="content-title">
          <h2 class="site-sub-title site-sub-title--dark pl-20">News!</h2>
          <v-btn depressed large to="/sign-in" style="font-weight: bold; width: 100%; text-transform: none; color: #17a9da; background: #fff; width: 150px; margin-left:auto;">
            もっと見る ＞
          </v-btn>
        </div>
        <v-row no-gutters>
          <v-col cols="12">
            <AppHorizontalCard/>
          </v-col>
          <v-col cols="12">
            <AppHorizontalCard/>
          </v-col>
          <v-col cols="12">
            <AppHorizontalCard/>
          </v-col>
          <v-col cols="12">
            <AppHorizontalCard/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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
    margin: 30px 0 10px;
  }
  .content-title {
    display: flex;
    align-items: center;
  }
  .site-sub-title--dark {
    font-size: 18px;
    font-weight: bold;
  }
  .item-swiper {
    margin: 50px 0;
    height: 450px;
  }
</style>