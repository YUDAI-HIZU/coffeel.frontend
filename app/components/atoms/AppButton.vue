<template>
  <v-btn 
    :class='`mx-2 background-color-${number} pc-btn`'
    large
    outlined
    depressed
    style="margin: 0 5px;"
  >
    <span>{{ title }}</span>
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>


<script>
  export default {
    props: ['number', 'title', 'icon'],
  }
</script>