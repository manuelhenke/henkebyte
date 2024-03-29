<template comments>
  <div class="resources-overview">
    <div class="search-bar mb-3">
      <div class="input-container">
        <input
          v-model="currentSearchInput"
          class="form-control"
          type="search"
          placeholder="Search..."
          aria-label="search resources"
          @keyup.enter="$event.target.blur()"
        />
        <div
          v-if="currentSearchInput"
          class="btn btn-icon clear-input"
          role="button"
          title="Reset input"
          @click="currentSearchInput = ''"
        >
          <i class="bi bi-x"></i>
        </div>
      </div>
      <button
        class="btn btn-primary d-none d-sm-inline-block"
        type="button"
        title="Toggle grid layout"
        @click="toggleGrid"
      >
        <i v-if="preferGrid" class="bi bi-bold bi-grid"></i>
        <i v-else class="bi bi-bold bi-columns-gap"></i>
      </button>
      <button
        class="btn btn-primary w-100"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasCategories"
        aria-controls="offcanvasCategories"
      >
        Filter<i class="bi bi-bold bi-funnel ms-2"></i>
      </button>
    </div>
    <div class="error-box">
      <div v-if="$fetchState.pending" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p v-else-if="$fetchState.error">An error occurred :(</p>
      <div v-else-if="filteredSites.length === 0" class="display-5">
        {{ nothingFoundMessage }}
      </div>
    </div>
    <div
      id="card-container"
      ref="cardContainer"
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-3"
    >
      <div v-for="site in filteredSites" :key="site.fields.title" class="col">
        <article class="card">
          <iframe
            v-if="site.fields.imageSrc"
            :aria-label="`Preview of ${site.fields.title ? site.fields.title : 'the site'}`"
            role="img"
            frameborder="0"
            sandbox
            :src="`data:text/html,<style>body{background:url('${site.fields.imageSrc}') center/cover no-repeat;padding:0;margin:0;overflow:hidden}</style>`"
          ></iframe>
          <div class="card-body">
            <h2 v-if="site.fields.title" class="card-title">
              {{ site.fields.title }}
            </h2>
            <p v-if="site.fields.description" class="card-text mb-0">
              {{ site.fields.description }}
            </p>
            <div
              v-if="Array.isArray(site.fields.categories)"
              class="d-flex flex-wrap gap-1 mt-2 mb-3"
            >
              <span
                v-for="category in site.fields.categories"
                :key="category.fields.title"
                class="badge rounded-pill bg-secondary text-dark"
                >#{{ category.fields.title }}</span
              >
            </div>
            <a
              v-if="site.fields.url"
              :href="site.fields.url"
              class="btn btn-primary"
              target="_blank"
              >Visit<i class="bi bi-bold bi-box-arrow-up-right ms-2"></i
            ></a>
          </div>
        </article>
      </div>
    </div>

    <div
      id="offcanvasCategories"
      class="offcanvas offcanvas-end"
      tabindex="-1"
      aria-labelledby="offcanvasCategoriesLabel"
    >
      <!-- categories offcanvas -->
      <div class="offcanvas-header">
        <h5 id="offcanvasCategoriesLabel" class="offcanvas-title">Categories</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body pt-0">
        <form>
          <div v-for="category in sortedCategories" :key="category.fields.title" class="form-check">
            <input
              :id="category.fields.title"
              v-model="checkedCategories"
              class="form-check-input"
              type="checkbox"
              :value="category.sys.id"
            />
            <label class="form-check-label" :for="category.fields.title">
              {{ category.fields.title }}
            </label>
          </div>
        </form>
        <div class="row row-cols-2 mt-3">
          <div class="col">
            <button
              :disabled="categories.length === checkedCategories.length"
              class="btn btn-primary w-100"
              type="button"
              @click="selectAllCategories"
            >
              Select All
            </button>
          </div>
          <div class="col">
            <button
              :disabled="checkedCategories.length === 0"
              class="btn btn-primary w-100"
              type="button"
              @click="deselectAllCategories"
            >
              Deselect All
            </button>
          </div>
        </div>
      </div>
      <!-- /categories offcanvas -->
    </div>
    <!-- /#resources-overview-page -->
  </div>
</template>

<script>
import { includes, isEqual, shuffle, sortBy, toLower, trim } from 'lodash-es';
import Masonry from 'masonry-layout';
import { client } from '@/plugins/contentful.js';

export default {
  name: 'ResourcesOverview',
  data: () => ({
    sites: [],
    categories: [],
    checkedCategories: [],
    currentSearchInput: '',
    masonry: undefined,
  }),
  fetch() {
    return (
      Promise.all([
        client.getEntries({
          content_type: 'site',
          order: '-sys.createdAt',
        }),
        client.getEntries({
          content_type: 'category',
          order: '-sys.createdAt',
        }),
      ])
        .then(([sites, categories]) => {
          this.sites = shuffle(sites.items);
          this.categories = categories.items;
          if (this.checkedCategories.length === 0) {
            this.checkedCategories = categories.items.map((item) => item.sys.id);
          }
        })
        // eslint-disable-next-line no-console
        .catch(console.error)
    );
  },
  computed: {
    preferGrid() {
      return this.$store.getters['settings/isPreferringGrid'];
    },
    filteredSites() {
      let filteredSites = this.sites;
      if (this.currentSearchInput) {
        const lowerCaseSearchInput = toLower(this.currentSearchInput);
        filteredSites = filteredSites.filter((site) =>
          includes(toLower(site.fields.title), lowerCaseSearchInput)
        );
      }

      filteredSites = filteredSites.filter(
        (site) =>
          !Array.isArray(site.fields.categories) ||
          site.fields.categories.some((category) =>
            this.checkedCategories.includes(category.sys.id)
          )
      );

      return filteredSites;
    },
    sortedCategories() {
      return [...this.categories].sort((cat1, cat2) =>
        cat1.fields.title.localeCompare(cat2.fields.title)
      );
    },
    nothingFoundMessage() {
      switch (trim(toLower(this.currentSearchInput))) {
        case 'anja':
        case 'av':
        case 'sophia':
        case 'anja-sophia': {
          return 'Gorgeous!!!';
        }
        case 'abi':
        case 'tobias':
        case 'topse':
        case 'tobse':
        case 'tobi': {
          return 'RIP Japan tea cup 2019 :(';
        }
        case 'winzling':
        case 'hobbit':
        case 'midget':
        case 'pavel': {
          return 'Thats a very HUGE input!';
        }
        case 'kunal': {
          return 'Zzzzzzzzzzzzz...';
        }
        case 'oguzhan':
        case 'osan':
        case 'osantor':
        case 'berber':
        case 'melih': {
          return 'Gülme vuruşu!';
        }
        case 'murat': {
          return 'Gesundheit abi!';
        }
        case 'nami':
        case 'namy':
        case 'sadeghnia':
        case 'namysade': {
          return 'Manuuuuu!';
        }
        case 'bilal': {
          return 'CRYPTO!!!!!';
        }
        case 'niko':
        case 'mestanis':
        case 'nibones':
        case 'grieche': {
          return 'Jaaaaaa, lass mal times...';
        }
        case 'thao': {
          return 'OOOOOOHHHHH VIETNAM!';
        }
        case 'bo':
        case 'boc':
        case 'bad oeynhausen': {
          return 'Winner of the Worlds Best City Award!';
        }
        case 'maxi':
        case 'verstappen': {
          return '"MAX VERSTAPPEN YOU ARE THE WORLD CHAMPION!"';
        }
        case 'lewis':
        case 'hamilton': {
          return 'Reckless driver!';
        }
        case 'perez':
        case 'pérez':
        case 'checko': {
          return 'Mexican Minister of Defence';
        }
        default: {
          return 'Wow, such empty';
        }
      }
    },
  },
  watch: {
    filteredSites() {
      if (this.masonry) {
        this.$nextTick(() => {
          this.masonry.reloadItems();
          this.layoutMasonry();
        });
      }
    },
    currentSearchInput() {
      const query = {
        ...this.$route.query,
      };
      if (this.currentSearchInput) {
        query.q = this.currentSearchInput;
      } else {
        delete query.q;
      }

      // Avoid redundant navigation
      if (this.$route.query.q !== query.q) {
        this.$router.replace({
          path: this.$route.path,
          query,
        });
      }
    },
    checkedCategories() {
      // Categories are still not fetched
      if (this.categories.length === 0) return;

      const query = {
        ...this.$route.query,
      };
      if (
        this.checkedCategories.length > 0 &&
        this.checkedCategories.length < this.categories.length
      ) {
        query.categories = this.checkedCategories;
      } else {
        delete query.categories;
      }

      // Avoid redundant navigation
      if (!isEqual(sortBy(this.$route.query.categories), sortBy(query.categories))) {
        this.$router.replace({
          path: this.$route.path,
          query,
        });
      }
    },
    preferGrid() {
      if (this.preferGrid) {
        this.disableMasonry();
      } else {
        this.enableMasonry();
      }
    },
  },
  mounted() {
    if (!this.preferGrid) {
      this.enableMasonry();
    }
    if ('q' in this.$route.query) {
      this.currentSearchInput = this.$route.query.q;
    }
    if ('categories' in this.$route.query) {
      this.checkedCategories = Array.isArray(this.$route.query.categories)
        ? this.$route.query.categories
        : [this.$route.query.categories];
    }
  },
  methods: {
    selectAllCategories() {
      this.checkedCategories = this.categories.map((item) => item.sys.id);
    },
    deselectAllCategories() {
      this.checkedCategories = [];
    },
    toggleGrid() {
      if (this.preferGrid) {
        this.$store.dispatch('settings/disablePreferGrid');
      } else {
        this.$store.dispatch('settings/enablePreferGrid');
      }
    },
    enableMasonry() {
      this.masonry = new Masonry(this.$refs.cardContainer, {
        // options
        itemSelector: '.col',
        percentPosition: true,
      });
    },
    disableMasonry() {
      if (this.masonry) {
        this.masonry.destroy();
        this.masonry = undefined;
      }
    },
    layoutMasonry() {
      if (this.masonry) {
        this.masonry.layout();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/bootstrap-mixins.scss';

.search-bar {
  display: flex;
  gap: map-get($spacers, 3);
  flex-direction: column;

  @include media-breakpoint-up(sm) {
    flex-direction: row;
  }

  .input-container {
    flex: 1 0;
    position: relative;

    input {
      &::-webkit-search-cancel-button {
        -webkit-appearance: none;
      }
    }

    .clear-input {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      display: inline-flex;
      place-content: center;
      place-items: center;
      padding-inline: map-get($spacers, 3);
      border: none;
      cursor: pointer;
    }
  }

  *:not(.input-container) {
    flex: 0 1;
    white-space: nowrap;
  }
}

.error-box {
  display: flex;
  place-content: center;
  place-items: center;
  text-align: center;

  &:not(:empty) {
    margin-top: map-get($spacers, 5);
  }
}

#card-container:empty {
  display: none;
}

.card {
  img,
  iframe {
    background-color: white;
    aspect-ratio: 1200 / 630;
    object-fit: cover;
    object-position: center;
  }

  .card-text {
    opacity: 0.7;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
