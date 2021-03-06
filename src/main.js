import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app');
