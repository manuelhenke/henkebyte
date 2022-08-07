<template comments>
  <div id="center-layout" class="layout-root">
    <!-- #center-layout -->
    <main class="content-container">
      <!-- main.content-container -->
      <Nuxt />
      <!-- /main.content-container -->
    </main>
    <aside>
      <FloatingContactButtons />
    </aside>
    <!-- /#center-layout -->
  </div>
</template>

<script>
export default {
  name: 'CenterLayout',
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

.layout-root {
  @include layout-root;

  display: flex;
  place-content: center;
  place-items: center;
  padding: map-get($spacers, 2);

  // this is kinda hacky to achieve only for mobile phones to use this value for min-height
  // on mobile device 100vh doesn't result in 100% of the visible screen. App bar and url tool bar also counts
  @include media-breakpoint-down(sm) {
    @media (hover: none) {
      min-height: -webkit-fill-available;
    }
  }

  .content-container {
    width: calc(min(37.5rem, 100%));
  }
}
</style>
