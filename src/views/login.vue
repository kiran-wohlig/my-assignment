<template>
  <section class="login login-bg">
    <div class="container">
      <div
        class="row no-gutters row-center justify-content-md-center align-items-center vh-100"
      >
        <div class="col-md-4">
          <div class="login-details">
            <div v-if="!formData.loader" class="my-4">
              <img
                src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/azdqhilnlkpbrvjtwu6u"
                alt="Logo"
                class="logo"
                height="35"
              />
            </div>
            <form
              name="user"
              class="form my-10"
              @submit.prevent="onSubmit(user)"
            >
              <div v-if="!formData.loader" class="text-center">
                <button
                  class="btn btn-primary mb-2 btn-lg"
                  @click="
                    login();
                    loginAuth();
                  "
                >
                  Login
                </button>
              </div>
              <div v-if="formData.loader">
                <img
                  src="https://media.tenor.com/guhB4PpjrmUAAAAM/loading-loading-gif.gif"
                  alt="loader"
                  width="150"
                />
                <p>we are safely redirecting ....</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginPage",
  props: {
    msg: String,
  },
  data() {
    return {
      formData: {
        loader: false,
      },
    };
  },
  created() {
    this.formData.loader = localStorage.getItem("loader") ? true : false;
    setInterval(() => {
      if (
        !localStorage.getItem("auth0accessToken") &&
        localStorage.getItem("loader")
      ) {
        this.formData.loader = false;
        localStorage.removeItem("loader");
        window.location.reload();
      }
    }, 5000);
  },
  methods: {
    login() {
      localStorage.clear();
      this.$auth.loginWithRedirect();
    },
    loginAuth() {
      this.formData.loader = true;
      localStorage.setItem("loader", true);
    },
    logout() {
      this.$auth.logout();
      localStorage.clear();
      // this.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "src/assets/scss/main.scss";
</style>
