<template>
    <div class="login">
      <v-btn class="mt-5 mr-2" depressed color="primary" @click="login()">login</v-btn>
      <v-btn class="mt-5" depressed color="primary" @click="logout()"
        >logout</v-btn
      >
    </div>
</template>
  
  <script>
  export default {
    name: "LoginPage",
    props: {
      msg: String,
    },
    data() {
      return {};
    },
    methods: {
      login() {
        this.$auth.loginWithRedirect();
      },
      logout() {
        this.$auth.logout();
        // this.$router.push("/");
      },
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style></style>
  