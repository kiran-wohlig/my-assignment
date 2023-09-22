<template>
  <div class="section-one mb-5">
    <div class="container">
      <div class="row">
        <v-col cols="12" sm="12" md="6">
          <h1>Transforming the Perspective of Technology</h1>
          <p>
            The catalyst that empowers to take advantage of the digital
            revolution.
          </p>
          <v-btn class="ma-2 sec-btn" height="52" width="263">
            Lets work together
          </v-btn>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-img
            lazy-src="@/assets/images/globe.png"
            max-height="150"
            max-width="250"
            src="@/assets/images/globe.png"
          ></v-img>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectOne",
};
</script>

<style scoped>
.section-one {
  font-family: Gilroy-Bold;
}
.sec-btn {
  background: linear-gradient(#00b0c2, #86c140);
  color: #ffffff !important;
  border-radius: 12px !important;
}
</style>
