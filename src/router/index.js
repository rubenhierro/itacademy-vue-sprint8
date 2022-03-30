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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/starships/:id/:name?",
      name: "starship",
      component: () => import("../views/StarshipView.vue"),
      meta: {
        requiresAuth: true,
      },
      // children: [
      //   {
      //     path: "pilots",
      //     name: "pilots",
      //     component: () => import("../components/PilotsComponent.vue"),
      //   },
      // ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !JSON.parse(localStorage.getItem("isLogged"))) {
    return { name: "login" };
  }
});

export default router;
