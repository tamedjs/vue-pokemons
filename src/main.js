import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
Vue.use(Router);

import API from "./services/api";
Vue.use(API);

import router from "@/router";

Vue.config.productionTip = false;

import "./main.css";
import vuetify from "./plugins/vuetify";

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
