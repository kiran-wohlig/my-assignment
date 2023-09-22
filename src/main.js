import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { Auth0Plugin } from "./auth";
const domain = "dev-zidmv3nrx2o8x0kw.us.auth0.com";
const clientId = "n0PLpSX24a6OMdANJsLzZJ9rZXqYYiB4";
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
  render: (h) => h(App),
}).$mount("#app");
