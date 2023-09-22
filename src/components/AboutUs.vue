<template>
  <div class="about-us">
    <div class="container">
      <div class="row">
        <v-col cols="12" sm="12" md="6">
          <v-img
            lazy-src="@/assets/images/globe-blue-tech.png"
            height="230"
            width="230"
            src="@/assets/images/globe-blue-tech.png"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <h2>About Us</h2>
          <p>
            Wohlig is catalyst that transforms the clients perspective of
            technology and empowers them to take advantage of the digital
            revolution that is constantly evolving.
          </p>
          <p>
            We simply want to help you leverage through our expertise to make
            your business efficient, cutting- edge and have a low cost of
            ownership.
          </p>
          <p>
            The core objective from the outset is to give the client a scalable
            paradigm shift through extensive use of modern technology,
            innovation, constant research on upcoming trends and malleable
            operational processes.
          </p>
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
  
  <style >
.about-us {
  font-family: Gilroy-Bold;
}
.about-us .container .row > p {
  font-size: 22px !important;
}
</style>
  