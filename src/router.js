import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import Introduce from "./Components/Introduce";
import Explore from "./Components/Explore";
import Attract from "./Components/Attract";
import TileEffects from "./Components/TileEffects";

import config from "../config.json";
import content from "./dataStructure";

import tilePositions from "./data/tilePositions";

// temp
import MediaPLayer from "./Components/MediaPLayer";

const routes = [
  {
    path: "/Introduce",
    component: Introduce,
  },
  {
    path: "/Explore",
    component: Explore,
  },
  {
    path: "/Attract",
    component: Attract,
  },
  {
    path: "/TileEffects",
    component: TileEffects,
    props: {
      tilePositions,
    },
  },
  {
    path: "*",
    component: Attract,
  },

  // TODO: default homepage
];

let router = new Router({
  mode: "history",
  routes,
});

// router.beforeEach((to, from, next) => {
//   console.log({ to, from });
// });

export default router;
