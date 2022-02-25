import { createApp } from "vue";
import router from "@/router";
import App from "@/App.vue";
import VueGtag from "vue-gtag";
import "./custom.scss";
import 'bootstrap';

const vueApp = createApp(App).use(router);

if (process.env.NODE_ENV === "production" && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

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
