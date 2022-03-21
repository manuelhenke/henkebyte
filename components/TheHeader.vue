<template comments>
  <header>
    <!-- header -->
    <nav>
      <nuxt-link to="/"><i class="bi bi-chevron-left"></i>Home</nuxt-link>
      <nuxt-link to="/"><TheLogo /></nuxt-link>
    </nav>
    <!-- /header -->
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

header {
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 3rem;
  }
}
</style>
