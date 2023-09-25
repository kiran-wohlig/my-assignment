import Vue from "vue";
import Router from "vue-router";
import LoginPage from "./views/login.vue";
import DashboardMain from "./views/DashboardMain.vue";
import AboutUs from "./components/AboutUs.vue";
import BelieveIn from "./components/BelieveIn.vue";
import SectionOne from "./components/SectionOne.vue";
import LetsWork from "./components/LetsWork.vue";
import NavbarMain from "./components/NavbarMain.vue";
import OurServices from "./components/OurServices.vue";
import OurClients from "./components/OurClients.vue";
import ContactUs from "./components/ContactUs.vue";
import HeaderTwo from "./components/HeaderTwo.vue";
import { authGuard } from "../src/auth/authGaurd";

Vue.use(Router);
NavbarMain
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
      path: "/SectionOne",
      name: "SectionOne",
      component: SectionOne,
      beforeEnter: authGuard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/AboutUs",
      name: "AboutUs",
      component: AboutUs,
      beforeEnter: authGuard,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: "/BelieveIn",
      name: "BelieveIn",
      component: BelieveIn,
      beforeEnter: authGuard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/LetsWork",
      name: "LetsWork",
      component: LetsWork,
      beforeEnter: authGuard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/NavbarMain",
      name: "NavbarMain",
      component: NavbarMain,
      beforeEnter: authGuard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/BelieveIn",
      name: "BelieveIn",
      component: BelieveIn,
      beforeEnter: authGuard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/OurServices",
      name: "OurServices",
      component: OurServices,
      beforeEnter: authGuard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/OurClients",
      name: "OurClients",
      component: OurClients,
      beforeEnter: authGuard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/ContactUs",
      name: "ContactUs",
      component: ContactUs,
      beforeEnter: authGuard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/HeaderTwo",
      name: "HeaderTwo",
      component: HeaderTwo,
      beforeEnter: authGuard,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: "/dashboardmain",
      name: "DashboardMain",
      component: DashboardMain,
      beforeEnter: authGuard,
    },
  ],
});
