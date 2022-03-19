<template>
  <footer
    class="text-center d-flex gap-2 flex-column justify-content-center align-items-center"
  >
    <div class="d-flex d-md-none gap-1 small">
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
    <ColorModePicker v-if="!noColorModePicker" />
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    noColorModePicker: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
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
