<template comments>
  <div id="error-page">
    <!-- #error-page -->
    <div v-if="error.statusCode === 404">
      <TheTitle>404 - Page not found</TheTitle>
      <TheLead>The page you are searching for does not exist.</TheLead>
    </div>
    <div v-else-if="errorMessage">
      <TheTitle>Error {{ error.statusCode }}</TheTitle>
      <TheLead>{{ errorMessage }}</TheLead>
    </div>
    <div v-else>
      <TheTitle>Error {{ error.statusCode }}</TheTitle>
      <TheLead>{{ error.message }}</TheLead>
    </div>

    <div class="text-center mt-3">
      <!-- https://unsplash.com/photos/fDaUCTp28dA -->
      <img
        src="~/assets/images/sad-lego.jpg"
        class="img-fluid"
        alt="Sad Robot"
      />
    </div>
    <!-- /#error-page -->
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'card-layout',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  head: {
    title: 'Page not found - HenkeByte',
    meta: [
      {
        hid: 'title',
        name: 'title',
        property: 'og:title',
        content: 'Page not found - HenkeByte',
      },
      {
        hid: 'description',
        name: 'description',
        property: 'og:description',
        content:
          'This is the fallback site if the requested page does not exist.',
      },
    ],
  },
  computed: {
    errorMessage() {
      let errorMessage = this.error.message
      if (!errorMessage.endWith('.')) {
        errorMessage += '.'
      }
      return errorMessage
    },
  },
}
</script>
