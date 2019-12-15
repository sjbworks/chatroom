import Vue from 'vue';
import App from './App.vue';
import router from './plugins/router';
import { firebase } from '@/plugins/firebase';

Vue.config.productionTip = false;

new Vue({
  router,
  firebase,
  render: h => h(App),
}).$mount('#app');
