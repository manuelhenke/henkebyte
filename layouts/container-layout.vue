<template comments>
  <div id="container-layout" class="layout-root bg-light">
    <!-- #container-layout -->
    <div class="container">
      <!-- .container -->
      <TheHeader />
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
  </div>
</template>

<script>
export default {
  name: 'ContainerLayout',
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

.layout-root {
  @include layout-root;
  .container {
    @include stretch;
    .footer {
      margin-top: map-get($spacers, 5);
    }
  }
}
</style>
