<template>
    <div class="hello">
      <MyDashboard />
    </div>
  </template>
  
  <script>
  import MyDashboard from "./components/MyDashboard.vue";
  export default {
    name: "MyDashboard",
    components: {
      MyDashboard,
    },
    props: {
      msg: String,
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style></style>
  