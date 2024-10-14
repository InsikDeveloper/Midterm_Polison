import { createMemoryHistory, createRouter } from "vue-router";

import App from "../App.vue";
import Home from "../components/Home.vue";
import ProductForm from "../components/ProductForm.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/products",
    name: "products",
    component: ProductForm,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
