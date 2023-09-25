<template>
  <div class="hello">
    <div class="login">hii you are in dashboard</div>
    <v-btn class="mt-5" depressed color="primary" @click="logout()"
      >logout</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "MyDashboard",
  props: {
    msg: String,
  },
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
