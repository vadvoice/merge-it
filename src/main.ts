import { createApp } from "vue";
import "./style.css";
// uno styles
import "virtual:uno.css";
// reset
import "@unocss/reset/normalize.css";

// state manager
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import { createRouter, createWebHashHistory } from "vue-router";

// color picker
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

// entry point
import App from "./App.vue";
// pages
import Randomize from "./pages/Randomize.vue";
import Builder from "./pages/Builder.vue";
import AboutPage from "./pages/About.vue";

const routes = [
  { path: "/", component: Builder },
  { path: "/build", component: Randomize },
  { path: "/about", component: AboutPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
const pinia = createPinia();

app.use(MotionPlugin).use(Vue3ColorPicker).use(pinia).use(router);

app.mount("#app");
