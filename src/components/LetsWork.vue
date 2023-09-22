<template>
  <div class="our-services mb-5">
    <div class="container">
      <div class="text-center mb-4">
        <h2>Let’s Work Together!</h2>
      </div>
      <div class="row mb-4">
        <v-col md="3" sm="">
          <div class="text-center">
            <v-card class="pa-2 work-card br-2">
              <div class="text-center believe-img">
                <h3>Meet & Discuss</h3>
                <p>We meet and discuss to make scope and planning.</p>
              </div>
            </v-card>
          </div>
        </v-col>
        <v-col md="3" sm="">
          <v-card class="pa-2 work-card">
            <div class="text-center believe-img">
              <h3>Scope & Plan</h3>
              <p>We scope and plan it accordingly.</p>
            </div>
          </v-card>
        </v-col>
        <v-col md="3" sm="">
          <v-card class="pa-2 work-card">
            <div class="text-center believe-img">
              <h3>Develop & Launch</h3>
              <p>With plan we develop accordingly and launch.</p>
            </div>
          </v-card>
        </v-col>

        <v-col md="3" sm=""> </v-col>
      </div>
      <v-btn class="ma-2 sec-btn" height="52" width="263"> Contact Us </v-btn>
    </div>
  </div>
</template>
    
    <script>
export default {
  name: "OurServices",
};
</script>
    
    <style>
.our-services {
  font-family: Gilroy-Bold;
}
.believe-img {
  display: grid;
  place-items: center;
}
.work-card {
  width: 515px;
  height: 96px;
}
.sec-btn {
  background: linear-gradient(#00b0c2, #c4c5c3);
  color: #ffffff !important;
  border-radius: 12px !important;
}
</style>
    