<template comments>
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
</template>

<script>
import LayoutRoot from './fragments/layout-root.vue';

export default {
  name: 'ContainerLayout',
  components: { LayoutRoot },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

#container-layout {
  .container {
    @include stretch;

    padding-top: map-get($spacers, 3);
    padding-bottom: map-get($spacers, 3);

    .footer {
      margin-inline: map-get($spacers, 5);
    }
  }
}
</style>
