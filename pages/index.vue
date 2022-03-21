<template comments>
  <div id="index-page">
    <!-- #index-page -->
    <WelcomeCard>
      <template #title>
        <h1 class="display-5 mb-0">
          Welcome to <span class="visually-hidden">HenkeByte</span>
        </h1>
      </template>

      <template #image>
        <div class="px-4"><TheLogo /></div>
      </template>

      <nav class="row row-cols-1 row-cols-sm-2 gy-3">
        <div
          v-for="navElement in navigation"
          :key="navElement.title"
          class="col"
        >
          <h2 v-if="navElement.title" class="h5 mb-1">
            {{ navElement.title }}
          </h2>
          <ul>
            <li v-for="link in navElement.links" :key="link.to">
              <router-link class="link-primary fs-5" :to="link.to">{{
                link.name
              }}</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </WelcomeCard>
    <!-- /#index-page -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'center-layout',
  data: () => ({
    navigation: [
      {
        title: 'General',
        links: [
          {
            to: 'about-me',
            name: 'About Me',
          },
          {
            to: 'resources-overview',
            name: 'Resources Overview',
          },
        ],
      },
      {
        title: 'Projects',
        links: [
          {
            to: 'ios-calculator',
            name: 'iOS-Calculator',
          },
          {
            to: 'minesweeper',
            name: 'Minesweeper',
          },
        ],
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

nav ul li:not(:last-child) {
  margin-bottom: map-get($spacers, 1);
}
</style>
