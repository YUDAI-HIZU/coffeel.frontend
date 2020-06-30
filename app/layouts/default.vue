<template>
  <div>
    <!-- header -->
    <v-app-bar
      class="background-color-primary"
      app
      height="70"
    >
      <v-toolbar-title>
        <img src="~assets/images/logo2.jpg" style="margin: 4px 0px 0px 3px; width: 130px; height: 40px;" alt="header" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- content -->
    <div class="container">
      <Nuxt />
    </div>
    <!-- footer -->
    <v-bottom-navigation
      app
      style="height: 70px;"
    >
      <v-btn value="recent">
        <span>Recent</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<style scoped>
.background-color-primary {
  background: #fbfbfb !important;
}

.header {
  max-width: 940px;
  min-width: 768px;
}

.container {
  padding: 80px 10px 10px;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 70px);
}
</style>
