import { createApp } from "vue";
import "./style.css";
// uno styles
import "virtual:uno.css";
// reset
import "@unocss/reset/normalize.css";

// state manager
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import { createRouter, createWebHistory } from "vue-router";

// entry point
import App from "./App.vue";
// pages
import HomePage from "./pages/Home.vue";
import Builder from "./pages/Builder.vue";
import AboutPage from "./pages/About.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/build", component: Builder },
  { path: "/about", component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
const pinia = createPinia();

app.use(MotionPlugin);
app.use(pinia);
app.use(router);

app.mount("#app");
