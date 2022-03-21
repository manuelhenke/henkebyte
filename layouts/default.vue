<template comments>
  <div id="default-layout" class="layout-root container-lg">
    <!-- #default-layout -->
    <div class="card bg-light shadow">
      <!-- .card -->
      <TheHeader />
      <main>
        <!-- main -->
        <Nuxt />
        <!-- /main -->
      </main>
      <TheFooter class="footer" />
      <!-- /.card -->
    </div>
    <aside>
      <FloatingContactButtons />
    </aside>
    <!-- /#default-layout -->
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

.layout-root {
  @include layout-root;

  padding-top: map-get($spacers, 4);
  padding-bottom: map-get($spacers, 4);

  .card {
    @include padding-main;
    @include media-breakpoint-up(lg) {
      --padding-y: #{map-get($spacers, 5)};
    }

    border: none;

    .footer {
      margin-top: map-get($spacers, 5);
    }
  }

  // breakpoint to hide colored background and make card full-width
  @include media-breakpoint-down(lg) {
    padding: map-get($spacers, 0);
    .card {
      @include stretch-main;
      border-radius: 0 !important;
      box-shadow: none;
    }
  }
}
</style>
