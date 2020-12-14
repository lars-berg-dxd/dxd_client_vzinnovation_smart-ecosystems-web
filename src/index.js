import Vue from "vue";
Vue.config.productionTip = false;
Vue.config.devtools = false;
// import store from './store'
import router from "./router";

import App from "./App";

import config from "../config.json";
import content from "./dataStructure";

new Vue({
  props: {
    config,
  },
  router,
  render: (h) =>
    h(App, {
      props: {
        config,
        content,
      },
    }),
  // store,
}).$mount("#app");
