<template>
  <header>
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
      <AppButton
        number="secondary"
        title="Recents"
        icon="mdi-history"
      >
      </AppButton>
      <AppButton
        number="primary"
        title="Recents"
        icon="mdi-history"
      >
      </AppButton>
      <v-btn color="success" fab class="mobile-btn" @click.stop="drawer = !drawer">
        <v-app-bar-nav-icon x-large></v-app-bar-nav-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item style="height: 70px;">
        <v-list-item-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          link
        >
          <v-list-item-icon>
            <v-icon></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
      }
    },
  }
</script>