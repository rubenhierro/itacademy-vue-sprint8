import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginService from "../services/LoginService";

const loginService = new LoginService();

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
      beforeEnter: (to, from) => {
        if (!loginService.getIsLogged()) {
          console.log(`Entra i es ${loginService.getIsLogged()}`);
          return { name: "login" };
        } else {
          console.log(loginService.getIsLogged());
        }


        // return false;
      },
    },
    {
      path: "/starships/:id/:name",
      name: "starship",
      component: () => import("../views/StarshipView.vue"),
      children: [
        {
          path: "pilots",
          name: "pilots",
          component: () => import("../components/PilotsComponent.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
  ],
});

// router.beforeEach((to, from) => {
//   if (to.meta.requiresAuth && loginService.getIsLogged() === false) {
//     return { name: "login" };
//   }
// });

export default router;
