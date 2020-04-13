import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import { store } from './store'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/scss/app.scss'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  store, 
  render: h => h(App)
}).$mount("#app");
