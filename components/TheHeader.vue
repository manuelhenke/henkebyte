<template comments>
  <header class="mb-1 mb-md-3">
    <!-- header -->
    <nav class="navbar navbar-expand-md navbar-light bg-light p-0">
      <nuxt-link class="navbar-brand p-0" to="/"><TheLogo /></nuxt-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-list"></i>
      </button>

      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li
            v-for="navElement in navigation"
            :key="navElement.title"
            :class="navElement.links ? `nav-item dropdown` : `nav-item`"
          >
            <nuxt-link
              v-if="navElement.to"
              class="nav-link"
              :to="navElement.to"
              >{{ navElement.title }}</nuxt-link
            >
            <div v-else>
              <a
                :id="`dropdownMenu${navElement.title}`"
                :class="navLinkDropdownClass(navElement)"
                type="button"
                :href="navElement.to"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ navElement.title }}
              </a>
              <ul
                class="dropdown-menu"
                :aria-labelledby="`dropdownMenu${navElement.title}`"
              >
                <li v-for="link in navElement.links" :key="link.to">
                  <nuxt-link class="dropdown-item" :to="link.to">{{
                    link.name
                  }}</nuxt-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!-- /header -->
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  computed: {
    navigation() {
      return this.$store.state.navigation
    },
  },
  methods: {
    navLinkDropdownClass(navElement) {
      const baseClasses = ['nav-link', 'dropdown-toggle']

      if (
        Array.isArray(navElement.links) &&
        navElement.links.some((link) => link.to === this.$route.params.slug)
      ) {
        baseClasses.push('active')
      }

      return baseClasses.join(' ')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

header {
  nav.navbar {
    /* display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none; */

    .navbar-toggler {
      padding: map-get($spacers, 2);
      border: none;
      box-shadow: none;
      outline: none;
      color: var(--bs-body-color);
      font-size: 1.5rem;
    }
  }

  img {
    width: 4rem;
    @include media-breakpoint-up(md) {
      width: 5rem;
    }
  }
}
</style>
