import { shallowMount } from "@vue/test-utils";
// Libraries
import Vue from "vue";
Vue.config.productionTip = false;

import Vuetify from "vuetify";
Vue.use(Vuetify);

/*import Router from "vue-router";
Vue.use(Router);*/

import App from "@/App";

describe("App.vue", () => {
  const $route = {
    fullPath: "/",
  };
  let wrapper = shallowMount(App, {
    mocks: {
      $route,
    },
  });
  test("Render main", () => {
    expect(wrapper.find(".app-pokemon-bar").exists()).toBeTruthy();
  });
});
