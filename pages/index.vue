<template>
  <WelcomeCard>
    <template #title>
      <h1 class="display-5 mb-0">
        Welcome to <span class="visually-hidden">HenkeByte</span>
      </h1>
    </template>

    <template #image>
      <img
        src="~/assets/images/henkebyte-logo.png"
        class="img-fluid"
        alt="Logo of henkebyte"
        height="200"
        width="200"
      />
    </template>

    <nav class="d-flex flex-column gap-2">
      <div v-for="navElement in navigation" :key="navElement.title">
        <h2 v-if="navElement.title" class="h4 mb-0">{{ navElement.title }}</h2>
        <ul>
          <li v-for="link in navElement.links" :key="link.to">
            <router-link class="btn btn-link btn-lg" :to="link.to">{{
              link.name
            }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </WelcomeCard>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'center',
  data: () => ({
    navigation: [
      {
        title: 'General',
        links: [
          {
            to: 'about-me',
            name: 'About Me',
          },
        ],
      },
      {
        title: 'Open Source Projects',
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
