import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import VueGtag from "vue-gtag";
import "./custom.scss";
import 'bootstrap';

const vueApp = createApp(App).use(router);

/*if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
} else {
  vueApp.use(
    VueGtag,
    {
      config: {
        id: "UA-140895510-1 ",
      },
    },
    router
  );
}*/

vueApp.mount("#app");
