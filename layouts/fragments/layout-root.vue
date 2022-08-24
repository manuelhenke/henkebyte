<template comments>
  <div class="layout-root">
    <slot></slot>
    <ToastProvider></ToastProvider>
  </div>
</template>

<script>
import ToastProvider from './toast-provider.vue';

export default {
  name: 'LayoutRoot',
  components: { ToastProvider },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

.layout-root {
  position: relative;
  min-height: 100vh;
}
</style>
