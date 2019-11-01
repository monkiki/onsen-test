import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import VueOnsen from 'vue-onsenui';

Vue.config.productionTip = false;
Vue.use(VueOnsen);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
