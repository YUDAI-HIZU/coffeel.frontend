<template>
  <v-card
    max-width="250"
    height="360"
    tile
    style="margin: 10px;"
  >
    <v-img
      height="250"
      :src="require('~/assets/images/kv3.jpeg')"
    ></v-img>
    <div style="display: flex;">
      <v-avatar style="margin: 5px;">
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
      <v-card-text style="padding: 25px 5px 10px; font-size: 12px; font-weight: 700;">Cafe Badilico</v-card-text>
    </div>
    <p class="sub-title">
      アイスコーヒ / レストラン / カフェ / ブレンドコーヒー
    </p>
  </v-card>
</template>

<style scoped>
  .sub-title {
    max-height: 50px;
    font-size: 11px;
    line-height: 1.5;
    overflow: hidden;
    font-weight: 700;
    color: #757575;
    margin: 5px;
  }
</style>