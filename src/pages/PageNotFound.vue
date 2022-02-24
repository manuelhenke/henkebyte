<template>
  <PageTemplate back-button-text="Home">
    <template v-slot:title>404 - Page not found</template>
    <template v-slot:lead>
      The Page you are searching for does not exist.
    </template>
    <div class="text-center mt-3">
      <!-- https://unsplash.com/photos/fDaUCTp28dA -->
      <img src="images/sad-lego.jpg" class="img-fluid" alt="Sad Robot">
    </div>
  </PageTemplate>
</template>

<script>
import PageTemplate from "@/pages/PageTemplate.vue";
export default {
  name: "PageNotFound",
  components: {
    PageTemplate,
  },
};
</script>

<style lang="scss" scoped>
</style>