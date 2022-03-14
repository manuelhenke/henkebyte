<template>
  <div class="contact-button-container d-none d-md-flex">
    <ContactButton
      v-for="contactOption of contactOptions"
      :key="contactOption.text"
      :text="contactOption.text"
      :href="contactOption.href"
      :icon="contactOption.icon"
    />
  </div>
</template>

<script>
export default {
  name: 'FloatingContactButtons',
  computed: {
    contactOptions() {
      return this.$store.state.contactOptions
    },
  },
}
</script>

<style lang="scss" scoped>
.contact-button-container {
  position: fixed;
  bottom: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 5px;
}
</style>
