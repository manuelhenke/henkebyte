import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "HenkeByte",
      metaTags: [
        {
          name: "title",
          property: "og:title",
          content: "HenkeByte",
        },
        {
          name: "description",
          property: "og:description",
          content:
            "A showcase website for different open source web projects including an iOS-Calculator and Minesweeper.",
        },
      ],
    },
  },
  {
    path: "/ios-calculator",
    name: "calculator",
    meta: {
      title: "iOS-Calculator - HenkeByte",
      metaTags: [
        {
          name: "title",
          property: "og:title",
          content: "iOS-Calculator - HenkeByte",
        },
        {
          name: "description",
          property: "og:description",
          content:
            "Showcase of the implementation of the project `ios-calculator-for-web` which is available at GitHub and npm.",
        },
      ],
    },
    // route level code-splitting
    // this generates a separate chunk (calculator.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "calculator" */ "@/pages/Calculator.vue"),
  },
  {
    path: "/minesweeper",
    name: "minesweeper",
    meta: {
      title: "Minesweeper - HenkeByte",
      metaTags: [
        {
          name: "title",
          property: "og:title",
          content: "Minesweeper - HenkeByte",
        },
        {
          name: "description",
          property: "og:description",
          content:
            "Showcase of the implementation of the project `minesweeper-for-web` which is available at GitHub and npm.",
        },
      ],
    },
    // route level code-splitting
    // this generates a separate chunk (minesweeper.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "minesweeper" */ "@/pages/Minesweeper.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "page-not-found",
    meta: {
      title: "Page not found - HenkeByte",
      metaTags: [
        {
          name: "title",
          property: "og:title",
          content: "Page not found - HenkeByte",
        },
        {
          name: "description",
          property: "og:description",
          content:
            "This is the fallback site if the requested page does not exist.",
        },
      ],
    },
    component: () =>
      import(/* webpackChunkName: "minesweeper" */ "@/pages/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

export default router;
