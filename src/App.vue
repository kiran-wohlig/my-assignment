<template>
  <v-app id="app">
    <navbar-main />
    <section-one />
    <about-us />
    <believe-in />
    <router-view></router-view>
  </v-app>
</template>

<script>
import AboutUs from "./components/AboutUs.vue";
import BelieveIn from "./components/BelieveIn.vue";
import NavbarMain from "./components/NavbarMain.vue";
import SectionOne from "./components/SectionOne.vue";

export default {
  name: "App",
  components: { NavbarMain, SectionOne, AboutUs, BelieveIn },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
