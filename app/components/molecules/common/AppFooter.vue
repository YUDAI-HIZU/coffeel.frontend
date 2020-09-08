<template>
  <v-footer
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center background-color-primary--dark"
      style="text-align: center;"
    >
      <v-card-text>
        <v-btn
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">mdi-facebook</v-icon>
        </v-btn>
        <v-btn
          class="mx-4 white--text"
          icon
          href="https://twitter.com/Coffeel_info"
        >
          <v-icon size="24px">mdi-twitter</v-icon>
        </v-btn>
        <v-btn
          class="mx-4 white--text"
          icon
          href="https://www.instagram.com/coffeel_info/"
        >
          <v-icon size="24px">mdi-instagram</v-icon>
        </v-btn>
        <v-btn
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">mdi-linkedin</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        <strong>Copyright © {{ new Date().getFullYear() }} COFFEEl All Rights Reserved.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
