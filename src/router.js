import Vue from "vue";
import Router from "vue-router";
import LoginPage from "./views/login.vue";
import MyDashboard from "./components/MyDashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/",
      name: "login",
      component: LoginPage,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/my-dashboard",
      name: "my-dashboard",
      component: MyDashboard,
      meta: {
        requiresAuth: true,
      },
    },

    // {
    //   path: "/pldetails",
    //   name: "PlDetails",
    //   meta: {
    //     requiresAuth: true,
    //   },
    //   component: () =>
    //     import(
    //       "./views/PlDetailsSection/PlDetails.vue"
    //     ),
    // },
  ],
});
