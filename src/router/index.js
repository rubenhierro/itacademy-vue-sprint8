import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/starships",
      name: "starships",
      component: () => import("../views/StarshipsView.vue"),
    },
    {
      path: "/starship/:id/:name?",
      name: "starship",
      component: () => import("../views/StarshipView.vue"),
    },
  ],
});

export default router;
