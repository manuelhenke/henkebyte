<template>
  <footer
    class="text-center d-flex gap-3 flex-column justify-content-center align-items-center"
  >
    <div class="d-flex d-md-none gap-2 small">
      <ContactButton
        v-for="contactOption of contactOptions"
        :key="contactOption.text"
        :text="contactOption.text"
        :href="contactOption.href"
        :icon="contactOption.icon"
      />
    </div>
    <div class="d-flex gap-2 small">
      <!-- <nuxt-link to="/imprint">Imprint</nuxt-link>
      <i class="bi bi-slash"></i> -->
      <span>&copy; {{ currentYear }} Copyright Manuel Henke</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
    contactOptions() {
      return this.$store.state.contactOptions
    },
  },
}
</script>
