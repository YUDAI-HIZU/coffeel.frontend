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
      <v-app-bar-nav-icon x-large class="mobile-btn" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      absolute
      temporary
    >
      <v-list-item style="height: 70px;">
        <v-list-item-avatar style="margin-right: 10px;">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Travis Howard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon style="margin-right: 10px;">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
      }
    },
  }
</script>