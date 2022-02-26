<template>
  <div id="error-layout">
    <div v-if="error.statusCode === 404">
      <TheTitle>404 - Page not found</TheTitle>
      <TheLead>The Page you are searching for does not exist.</TheLead>
    </div>
    <div v-else-if="errorMessage">
      <TheTitle>Error {{ error.statusCode }}</TheTitle>
      <TheLead>{{ errorMessage }}</TheLead>
    </div>
    <div v-else>
      <TheTitle>Error {{ error.statusCode }}</TheTitle>
      <TheLead>{{ error.message }}</TheLead>
    </div>

    <hr class="my-4" />

    <div class="text-center mt-3">
      <!-- https://unsplash.com/photos/fDaUCTp28dA -->
      <img
        src="~/assets/images/sad-lego.jpg"
        class="img-fluid"
        alt="Sad Robot"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',
  layout: 'default-centered',
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
