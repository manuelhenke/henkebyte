import Amplify, * as AmplifyModules from 'aws-amplify';
import { Logger } from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import awsconfig from './aws-exports';
import Vue from 'vue';
import App from './App.vue';
import VueAnalytics from 'vue-analytics';

Amplify.configure(awsconfig);

Vue.use(AmplifyPlugin, AmplifyModules);
Vue.use(VueAnalytics, {
  id: 'UA-140895510-1 '
});

// It's important that you instantiate the Vue instance after calling Vue.use!

const logger = new Logger("vue-logger");

logger.info("App initialized");

new Vue({
  render: h => h(App)
}).$mount('#app');