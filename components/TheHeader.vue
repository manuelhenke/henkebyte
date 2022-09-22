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
      <NuxtLink class="navbar-brand" to="/">
        <TheLogo />
      </NuxtLink>

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
          <NuxtLink v-if="navElement.to" class="btn nav-link" :to="navElement.to">{{
            navElement.name
          }}</NuxtLink>
          <a
            v-else-if="navElement.href"
            class="btn nav-link"
            :href="navElement.href"
            target="_blank"
            >{{ navElement.name }}</a
          >
          <div v-else class="navbar-dropdown-container">
            <a
              ref="dropdown"
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
              <li v-for="link in navElement.links" :key="link.name">
                <NuxtLink
                  v-if="link.to"
                  class="btn nav-link"
                  :to="link.to"
                  :aria-current="$route.params.slug === link.to"
                  >{{ link.name }}</NuxtLink
                >
                <a
                  v-else-if="link.href"
                  class="btn nav-link blank-icon"
                  :href="link.href"
                  target="_blank"
                  >{{ link.name }}</a
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
import { mixin as clickaway } from 'vue-clickaway';
import { throttle } from 'lodash-es';
import { Dropdown } from 'bootstrap';

export default {
  name: 'TheHeader',
  mixins: [clickaway],
  data: () => ({
    isMobileMenuVisible: false,
    isSticky: undefined,
  }),
  computed: {
    navigation() {
      return this.$store.state.navigation;
    },
  },
  watch: {
    $route(_to, _from) {
      this.isMobileMenuVisible = false;
      if (Array.isArray(this.$refs.dropdown)) {
        this.$refs.dropdown
          .map((element) => Dropdown.getOrCreateInstance(element))
          .filter((dropdown) => !!dropdown)
          .forEach((dropdown) => {
            dropdown.hide();
          });
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.checkIsSticky);
  },
  destroyed() {
    window.removeEventListener('scroll', this.checkIsSticky);
  },
  methods: {
    hasActiveChild(navElement) {
      return (
        Array.isArray(navElement.links) &&
        navElement.links.some((link) => link.to === this.$route.path)
      );
    },
    toggleMobileMenu() {
      this.isMobileMenuVisible = !this.isMobileMenuVisible;
    },
    openMobileMenu() {
      this.isMobileMenuVisible = true;
    },
    closeMobileMenu() {
      this.isMobileMenuVisible = false;
    },
    checkIsSticky: throttle(function checkIsSticky() {
      this.isSticky = this.$refs.header.offsetTop > 0;
    }, 200),
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';
$navbar-breakpoint: sm;

header {
  transition: box-shadow 0.1s linear;
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
  padding-top: map-get($spacers, 1);
  padding-bottom: map-get($spacers, 1);

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
    padding-right: calc(var(--bs-gutter-x, 1.5rem) * 0.5);
    padding-left: calc(var(--bs-gutter-x, 1.5rem) * 0.5);
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
