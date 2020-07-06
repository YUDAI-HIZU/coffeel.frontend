<template>
  <div>
    <!-- header -->
    <v-app-bar
      class="header background-color-primary"
      app
      hide-on-scroll
      height="70"
    >
      <v-toolbar-title>
        <img src="~assets/images/logo2.jpg" style="margin: 4px 0px 0px 3px; width: 130px; height: 40px;" alt="header" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mx-2 background-color-secondary" large depressed style="margin: 0 5px;">
        <span>Recents</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn class="mx-2" outlined large style="margin: 0 5px;">
        <span>Recents</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- content -->
    <div class="container">
      <Nuxt />
    </div>
    <!-- footer -->
  </div>
</template>

<style scoped>
.background-color-primary {
  background: #fbfbfb !important;
}

.background-color-secondary {
  background: #00704A !important;
  color: white !important;
}

@media screen and (min-width: 940px){
  .header {
    padding: 0 150px;
  }
}

.container {
  margin: 80px auto 80px;
  max-width: 940px;
  height: 100%;
  min-height: calc(100vh - 160px);
}
</style>
