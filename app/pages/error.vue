<template>
  <div class="container" style="text-align: center;">
    <!-- <h1>{{ error.statusCode }}</h1>
    <p v-if="error.statusCode === 404">
      ページが見つかりません
    </p>
    <p v-else>
      エラーが発生しました
    </p> -->
    <img src="~/assets/images/404.png" alt="" class="error-img">
    <img src="~/assets/images/500.png" alt="" class="error-img">
  </div>
</template>

<script>
export default {
  // props: {
  //   error: {
  //     type: Object,
  //     default: null
  //   }
  // }
}
</script>