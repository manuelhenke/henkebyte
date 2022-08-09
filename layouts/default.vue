<template comments>
  <LayoutRoot id="default-layout" class="container-lg">
    <!-- #default-layout -->
    <div class="card bg-light shadow">
      <!-- .card -->
      <TheHeader class="header" />
      <div class="container">
        <main>
          <!-- main -->
          <Nuxt />
          <!-- /main -->
        </main>
        <TheFooter class="footer" />
      </div>
      <!-- /.card -->
    </div>
    <aside>
      <FloatingContactButtons />
    </aside>
    <!-- /#default-layout -->
  </LayoutRoot>
</template>

<script>
import LayoutRoot from './fragments/layout-root.vue';

export default {
  name: 'DefaultLayout',
  components: { LayoutRoot },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

#default-layout {
  .card {
    border: none;
    .container {
      padding-top: map-get($spacers, 3);
      padding-bottom: map-get($spacers, 3);
    }
  }

  .footer {
    margin-top: map-get($spacers, 5);
  }

  @include media-breakpoint-up(lg) {
    padding-top: map-get($spacers, 4);
    padding-bottom: map-get($spacers, 4);

    .card {
      border: none;
      // overflow: hidden; // will break sticky header
      .container {
        --padding-y: #{map-get($spacers, 5)};
        @include padding-main-x;
      }
    }
  }

  // breakpoint to hide colored background and make card full-width
  @include media-breakpoint-down(lg) {
    &.container-lg {
      padding: map-get($spacers, 0);
    }

    .card {
      @include stretch($selector: '.container');
      min-height: 100vh;
      border-radius: 0 !important;
      box-shadow: none;

      .container {
        @include stretch;
      }
    }
  }
}
</style>
