<template comments>
  <div class="layout-root">
    <slot></slot>
    <ToastProvider />
    <CookieBanner />
  </div>
</template>

<script>
import ToastProvider from './toast-provider.vue';
import CookieBanner from './cookie-banner.vue';

export default {
  name: 'LayoutRoot',
  components: { ToastProvider, CookieBanner },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

.layout-root {
  position: relative;
  min-height: 100vh;
}
</style>
