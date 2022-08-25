<template comments>
  <footer>
    <!-- footer -->
    <div class="upper-footer d-md-none">
      <ContactButton
        v-for="contactOption of contactOptions"
        :key="contactOption.text"
        :text="contactOption.text"
        :href="contactOption.href"
        :icon="contactOption.icon"
      />
    </div>
    <div class="lower-footer">
      <!-- <NuxtLink to="/imprint">Imprint</NuxtLink>
      <i class="bi bi-slash"></i> -->
      <small>&copy; {{ currentYear }} Copyright Manuel Henke</small>
    </div>
    <ColorModePicker v-if="!noColorModePicker" />
    <!-- /footer -->
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
      return new Date().getFullYear();
    },
    contactOptions() {
      return this.$store.state.contactOptions;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

footer {
  text-align: center;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  gap: map-get($gutters, 2);

  .upper-footer {
    display: flex;
    gap: map-get($gutters, 1);
  }

  .lower-footer {
    display: flex;
    gap: map-get($gutters, 2);
  }
}
</style>
