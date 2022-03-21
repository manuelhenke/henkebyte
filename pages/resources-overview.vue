<template comments>
  <div id="resources-overview-page">
    <!-- #resources-overview-page -->
    <TheTitle>Resources Overview</TheTitle>
    <TheLead
      >This is a collection of my favorite resources which levitate my
      development workflow.</TheLead
    >

    <hr class="my-4" />

    <div class="row flex-sm-row">
      <!-- main area -->
      <div class="col-12 col-sm-8">
        <!-- card container -->
        <input
          v-model="currentSearchInput"
          class="form-control"
          type="text"
          placeholder="Search..."
          aria-label="search resources"
        />
        <button
          class="btn btn-primary d-sm-none w-100 mt-3"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasCategories"
          aria-controls="offcanvasCategories"
        >
          Filter
        </button>
        <div
          v-if="filteredSites.length === 0"
          class="display-5 my-5 text-center"
        >
          {{ nothingFoundMessage }}
        </div>
        <article
          v-for="site in filteredSites"
          :key="site.fields.title"
          class="card my-3"
        >
          <div class="card-body">
            <h2 class="card-title">{{ site.fields.title }}</h2>
            <p class="card-text d-none">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <div
              v-if="Array.isArray(site.fields.categories)"
              class="d-flex gap-1 my-3"
            >
              <span
                v-for="category in site.fields.categories"
                :key="category.fields.title"
                class="badge rounded-pill bg-secondary text-dark"
                >#{{ category.fields.title }}</span
              >
            </div>
            <a :href="site.fields.url" class="btn btn-primary" target="_blank"
              >Visit<i class="bi bi-box-arrow-up-right ms-2"></i
            ></a>
          </div>
        </article>
        <!-- /card container -->
      </div>

      <aside class="col-12 col-sm-4 mb-3 d-none d-sm-block">
        <!-- categories sidebar -->
        <h2>Categories</h2>
        <form>
          <div
            v-for="category in sortedCategories"
            :key="category.fields.title"
            class="form-check"
          >
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
        <div class="row row-cols-1 row-cols-md-2 g-1 mt-3">
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
        <!-- /categories sidebar -->
      </aside>
      <!-- /main area -->
    </div>

    <div
      id="offcanvasCategories"
      class="offcanvas offcanvas-end d-sm-none"
      tabindex="-1"
      aria-labelledby="offcanvasCategoriesLabel"
    >
      <!-- categories offcanvas -->
      <div class="offcanvas-header">
        <h5 id="offcanvasCategoriesLabel" class="offcanvas-title">
          Categories
        </h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body pt-0">
        <form>
          <div
            v-for="category in sortedCategories"
            :key="category.fields.title"
            class="form-check"
          >
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
import { client } from '~/plugins/contentful.js'

export default {
  name: 'ResourcesOverviewPage',
  asyncData() {
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
          return {
            sites: sites.items,
            categories: categories.items,
            checkedCategories: categories.items.map((item) => item.sys.id),
          }
        })
        // eslint-disable-next-line no-console
        .catch(console.error)
    )
  },
  data: () => ({
    sites: [],
    categories: [],
    checkedCategories: [],
    currentSearchInput: '',
  }),
  head: {
    title: 'Resources Overview - HenkeByte',
    meta: [
      {
        hid: 'title',
        name: 'title',
        property: 'og:title',
        content: 'Resources Overview - HenkeByte',
      },
      {
        hid: 'description',
        name: 'description',
        property: 'og:description',
        content: `This is a collection of my favorite resources which levitate my development workflow.`,
      },
    ],
  },
  computed: {
    filteredSites() {
      let filteredSites = this.sites
      if (this.currentSearchInput) {
        const lowerCaseSearchInput = this.currentSearchInput.toLowerCase()
        filteredSites = filteredSites.filter((site) =>
          site.fields.title.toLowerCase().includes(lowerCaseSearchInput)
        )
      }

      filteredSites = filteredSites.filter(
        (site) =>
          !Array.isArray(site.fields.categories) ||
          site.fields.categories.some((category) =>
            this.checkedCategories.includes(category.sys.id)
          )
      )

      return filteredSites
    },
    sortedCategories() {
      return Array.from(this.categories).sort((cat1, cat2) => {
        return cat1.fields.title.localeCompare(cat2.fields.title)
      })
    },
    nothingFoundMessage() {
      switch (this.currentSearchInput.toLowerCase().trim()) {
        case 'abi':
        case 'tobias':
        case 'topse':
        case 'tobse':
        case 'tobi':
          return 'RIP Japan tea cup 2019 :('
        case 'winzling':
        case 'hobbit':
        case 'midget':
        case 'pavel':
          return 'Thats a very HUGE input!'
        case 'kunal':
          return 'Zzzzzzzzzzzzz...'
        case 'oguzhan':
        case 'osan':
        case 'osantor':
        case 'berber':
        case 'melih':
          return 'Gülme vuruşu!'
        case 'nami':
        case 'namy':
        case 'sadeghnia':
        case 'namysade':
          return 'Manuuuuu!'
        case 'bilal':
          return 'CRYPTO!!!!!'
        case 'niko':
        case 'mestanis':
        case 'nibones':
        case 'grieche':
          return 'Jaaaaaa, lass mal times...'
        case 'thao':
          return 'OOOOOOHHHHH VIETNAM!'
        case 'henni':
        case 'henricke':
          return "You're screaming again!"
        case 'bo':
        case 'boc':
        case 'bad oeynhausen':
          return 'Winner of the Worlds Best City Award!'
        case 'maxi':
        case 'verstappen':
          return '"MAX VERSTAPPEN YOU ARE THE WORLD CHAMPION!"'
        case 'lewis':
        case 'hamilton':
          return 'Reckless driver!'
        case 'perez':
        case 'pérez':
        case 'checko':
          return 'Mexican Minister of Defence'
        default:
          return 'Wow, such empty'
      }
    },
  },
  methods: {
    selectAllCategories() {
      this.checkedCategories = this.categories.map((item) => item.sys.id)
    },
    deselectAllCategories() {
      this.checkedCategories = []
    },
  },
}
</script>
