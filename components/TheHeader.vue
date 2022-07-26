<template comments>
  <header ref="header" class="sticky-top" :class="{ 'is-sticky': isSticky }">
    <!-- header -->
    <div v-if="isMobileMenuVisible" class="overlay"></div>
    <nav
      v-on-clickaway="closeMobileMenu"
      :class="{
        visible: isMobileMenuVisible,
      }"
    >
      <nuxt-link class="navbar-brand" to="/"><TheLogo /></nuxt-link>

      <button class="btn navbar-toggle" type="button" @click="toggleMobileMenu">
        <i v-if="isMobileMenuVisible" class="bi bi-x-lg"></i>
        <i v-else class="bi bi-list"></i>
      </button>

      <ul class="navbar-links">
        <li
          v-for="navElement in navigation"
          :key="navElement.title"
          class="navbar-item"
          :class="{
            'dropdown-center': !navElement.to,
          }"
        >
          <nuxt-link
            v-if="navElement.to"
            class="btn nav-link"
            :to="navElement.to"
            >{{ navElement.title }}</nuxt-link
          >
          <div v-else class="navbar-dropdown-container">
            <a
              class="btn nav-link dropdown-toggle"
              :class="{
                'active-child': hasActiveChild(navElement),
              }"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ navElement.title }}<i class="bi bi-chevron-down"></i>
            </a>
            <ul class="dropdown-menu">
              <li v-for="link in navElement.links" :key="link.to">
                <nuxt-link
                  class="btn nav-link"
                  :to="link.to"
                  :aria-current="$route.params.slug === link.to"
                  >{{ link.name }}</nuxt-link
                >
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
    <!-- /header -->
  </header>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import { throttle } from 'lodash-es'

export default {
  name: 'TheHeader',
  mixins: [clickaway],
  data: () => ({
    isMobileMenuVisible: false,
    isSticky: null,
  }),
  computed: {
    navigation() {
      return this.$store.state.navigation
    },
  },
  watch: {
    $route(to, from) {
      this.isMobileMenuVisible = false
    },
  },
  mounted() {
    window.addEventListener('scroll', this.checkIsSticky)
  },
  destroyed() {
    window.removeEventListener('scroll', this.checkIsSticky)
  },
  methods: {
    hasActiveChild(navElement) {
      if (
        Array.isArray(navElement.links) &&
        navElement.links.some((link) => link.to === this.$route.params.slug)
      ) {
        return true
      }

      return false
    },
    toggleMobileMenu() {
      this.isMobileMenuVisible = !this.isMobileMenuVisible
    },
    openMobileMenu() {
      this.isMobileMenuVisible = true
    },
    closeMobileMenu() {
      this.isMobileMenuVisible = false
    },
    checkIsSticky: throttle(function () {
      if (this.$refs.header.offsetTop > 0) {
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    }, 200),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';
$navbar-breakpoint: sm;

header {
  transition: box-shadow 0.2s ease-in;
  &.is-sticky {
    box-shadow: $box-shadow-sm;
  }
}

nav {
  background: var(--bs-light);
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  flex-flow: row wrap;
  @include padding-main-x;
  padding-top: map-get($spacers, 2);
  padding-bottom: map-get($spacers, 2);

  .navbar-toggle {
    margin-left: auto;
    font-size: 1.5rem;
  }

  .nav-link,
  .navbar-toggle {
    padding: map-get($spacers, 2);
    border: none;
    box-shadow: none;
    outline: none;
    color: var(--bs-body-color);
    background: none;

    &:focus {
      box-shadow: none;
    }

    &:hover {
      background: rgba(var(--bs-primary-rgb), 0.1);
    }

    opacity: 0.8;
    &.active,
    &.active-child {
      font-weight: bold;
      opacity: 1;
    }

    &.dropdown-toggle {
      &::after {
        display: none;
      }

      i {
        transition: transform 100ms ease-in-out;
      }

      &.show {
        i {
          transform: rotate(180deg);
        }
      }
    }
  }

  .navbar-links {
    display: flex;
  }

  .navbar-item {
    position: static;
    .nav-link {
      display: flex;
      align-items: center;
      align-content: center;
    }
  }

  // Mobile View
  @include media-breakpoint-down($navbar-breakpoint) {
    .navbar-brand {
      img {
        width: 4rem;
      }
    }

    .navbar-links {
      background: var(--bs-light);
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;

      gap: map-get($spacers, 0);
      flex-flow: column wrap;
    }

    &.visible {
      z-index: $zindex-fixed;
      .navbar-links {
        margin-bottom: map-get($spacers, 3);
      }
    }

    &:not(.visible) {
      .navbar-links {
        display: none;
      }
    }

    .navbar-item {
      .nav-link {
        @include padding-main-x;
        padding-top: map-get($spacers, 3);
        padding-bottom: map-get($spacers, 3);
        border-radius: 0;

        &:hover {
          color: var(--bs-primary);
        }
      }
    }

    .navbar-dropdown-container {
      .dropdown-toggle {
        i {
          margin-left: auto;
        }
      }

      .dropdown-menu {
        position: relative !important;
        transform: none !important;
        border: none;
        border-radius: 0;
        background: var(--bs-light);
        padding: 0;
        @include padding-main-x;
        .nav-link {
          border-left: map-get($border-widths, 3) solid var(--bs-primary);
          padding-left: map-get($spacers, 3);
        }
      }
    }
  }

  // Desktop View
  @include media-breakpoint-up($navbar-breakpoint) {
    .navbar-brand {
      img {
        width: 5rem;
      }
    }

    .navbar-toggle {
      display: none;
    }

    .navbar-links {
      margin-left: auto;
      flex: 0 0 auto;

      gap: map-get($spacers, 3);
      flex-flow: row nowrap;

      position: relative;
    }

    .navbar-item {
      display: inline-block;

      .nav-link {
        gap: map-get($spacers, 2);
      }
    }

    .dropdown-menu {
      padding: map-get($spacers, 3);
      box-shadow: $box-shadow-lg;
      border-radius: $border-radius-lg;
      background: var(--bs-light);
    }
  }
}

@include media-breakpoint-down($navbar-breakpoint) {
  .overlay {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    display: block;
    background: black;
    opacity: 0.75;
    z-index: $zindex-fixed - 1;
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  appearance: none;
}
</style>
