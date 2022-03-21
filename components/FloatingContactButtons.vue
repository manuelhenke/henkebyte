<template>
  <div class="floating-contact-buttons d-none d-md-flex">
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
@import '@/assets/css/bootstrap-mixins.scss';

.floating-contact-buttons {
  position: fixed;
  bottom: map-get($spacers, 3);
  right: map-get($spacers, 3);
  display: flex;
  flex-direction: column;
  place-items: flex-end;
  place-content: center;
  gap: map-get($spacers, 1);
}
</style>
