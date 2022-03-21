<template comments>
  <div id="plain-layout" class="layout-root bg-light">
    <!-- #plain-layout -->
    <div class="container-lg">
      <!-- .container-lg -->
      <TheHeader />
      <main>
        <!-- main -->
        <Nuxt />
        <!-- /main -->
      </main>
      <TheFooter class="footer" />
      <!-- /.container-lg -->
    </div>
    <aside>
      <FloatingContactButtons />
    </aside>
    <!-- /#plain-layout -->
  </div>
</template>

<script>
export default {
  name: 'PlainLayout',
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

.layout-root {
  @include layout-root;

  .container-lg {
    @include stretch-main;
    @include padding-main;

    .footer {
      margin-top: map-get($spacers, 5);
    }
  }
}
</style>
