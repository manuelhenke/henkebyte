<template comments>
  <div class="layout-root">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LayoutRoot',
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

.layout-root {
  @include layout-root;
}
</style>
