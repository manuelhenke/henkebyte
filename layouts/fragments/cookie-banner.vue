<template>
  <cookie-law
    theme="custom"
    button-class="btn btn-secondary"
    :button-decline="false"
    button-decline-class="btn btn-outline-light"
  ></cookie-law>
</template>

<script>
import CookieLaw from 'vue-cookie-law';

export default {
  name: 'CookieBanner',
  components: { CookieLaw },
};
</script>

<style lang="scss">
@import '@/assets/css/bootstrap-mixins.scss';

.Cookie {
  &--custom {
    background: var(--bs-white);
    box-shadow: $box-shadow-lg;
    padding: map-get($spacers, 4);
  }

  .Cookie__buttons {
    gap: map-get($spacers, 2);
  }
}
</style>
