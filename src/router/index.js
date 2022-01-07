import { createRouter, createWebHistory } from "vue-router";

import App from "../App.vue";
import AboutView from "../views/AboutView.vue";
import Calculator from "../views/Calculator.vue";
import CityList from "../views/CityList.vue";
import Error from "../views/Error.vue";

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  {
    path: "/index.html",
    name: "App",
    component: App,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: Calculator,
  },
  {
    path: "/cities",
    name: "CityList",
    component: CityList,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
