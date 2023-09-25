import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import breakpoint from "./plugins/breakpoint";
import { Auth0Plugin } from "./auth";
const domain = "dev-zidmv3nrx2o8x0kw.us.auth0.com";
const clientId = "n0PLpSX24a6OMdANJsLzZJ9rZXqYYiB4";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";


// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(BootstrapVue);
// Install the authentication plugin here
// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  breakpoint,
  render: (h) => h(App),
}).$mount("#app");
