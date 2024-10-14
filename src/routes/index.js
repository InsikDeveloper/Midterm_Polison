import { createMemoryHistory, createRouter } from "vue-router";

import App from "../App.vue";
import Home from "../components/Home.vue";
import ProductList from "../components/Home.vue";

const routes = [
  {
    path: "/",
    name: "app",
    component: App,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/products",
    name: "products",
    component: ProductList,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
