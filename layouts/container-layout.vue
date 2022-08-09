<template comments>
  <ToastProvider>
    <LayoutRoot id="container-layout" class="bg-light">
      <!-- #container-layout -->
      <TheHeader />
      <div class="container">
        <!-- .container -->
        <main>
          <!-- main -->
          <Nuxt />
          <!-- /main -->
        </main>
        <TheFooter class="footer" />
        <!-- /.container -->
      </div>
      <aside>
        <FloatingContactButtons />
      </aside>
      <!-- /#container-layout -->
    </LayoutRoot>
  </ToastProvider>
</template>

<script>
import LayoutRoot from './fragments/layout-root.vue';
import ToastProvider from './fragments/toast-provider.vue';

export default {
  name: 'ContainerLayout',
  components: { LayoutRoot, ToastProvider },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

#container-layout {
  .container {
    @include stretch;
    .footer {
      margin-top: map-get($spacers, 5);
    }
  }
}
</style>
