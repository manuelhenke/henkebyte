import Vue from 'vue';

import Amplify, * as AmplifyModules from 'aws-amplify';
import { Logger } from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
Vue.use(AmplifyPlugin, AmplifyModules)
Vue.use(new Logger("amplify-logger"))


import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


import PortalVue from 'portal-vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './custom.scss'
Vue.use(PortalVue)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


import VueRouter from 'vue-router'
import WelcomeCard from "./components/WelcomeCard.vue";
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: WelcomeCard }
  ]
})


import VueAnalytics from 'vue-analytics';
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
} else {
  Vue.use(VueAnalytics, {
    id: 'UA-140895510-1 ',
    router: router
  });
}


// It's important that you instantiate the Vue instance after calling Vue.use!
import App from './App.vue';
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');