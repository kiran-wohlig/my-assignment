<template>
  <div class="our-services my-10" id="workprocess">
    <div class="container">
      <div class="text-center mb-4">
        <h2
          class="gilroy-bold"
          :class="$vuetify.breakpoint.mdAndUp ? 'font-48 mt-10' : 'font-28'"
        >
          Let’s Work Together!
        </h2>
      </div>
      <div class="row mb-4">
        <v-col md="4" sm="">
          <div class="text-center">
            <v-card class="pa-4 work-card br-2">
              <div class="text-center service-img">
                <h3 :class="$vuetify.breakpoint.mdAndUp ? 'font-5' : 'font-3'">
                  Meet & Discuss
                </h3>
                <p :class="$vuetify.breakpoint.mdAndUp ? 'font-4' : 'font-2'">
                  We meet and discuss to make scope and planning.
                </p>
              </div>
            </v-card>
          </div>
        </v-col>
        <v-col md="4" sm="">
          <v-card class="pa-2 work-card">
            <div class="text-center service-img">
              <h3 :class="$vuetify.breakpoint.mdAndUp ? 'font-5' : 'font-3'">
                Scope & Plan
              </h3>
              <p :class="$vuetify.breakpoint.mdAndUp ? 'font-4' : 'font-2'">
                We scope and plan it accordingly.
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col md="4" sm="">
          <v-card class="pa-2 work-card">
            <div class="text-center service-img">
              <h3 :class="$vuetify.breakpoint.mdAndUp ? 'font-5' : 'font-3'">
                Develop & Launch
              </h3>
              <p :class="$vuetify.breakpoint.mdAndUp ? 'font-4' : 'font-2'">
                With plan we develop accordingly and launch.
              </p>
            </div>
          </v-card>
        </v-col>

        <!-- <v-col md="3" sm=""> </v-col> -->
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

<style lang="scss">
@import "src/assets/scss/main.scss";
.our-services {
  font-family: Gilroy-Bold;
}
.service-img {
  display: grid;
  place-items: center;
}
.work-card {
  width: 100%;
  height: 168px;
  display: grid !important;
  place-items: center !important;
  border-radius: 20px !important;
  box-shadow: 3px 4px 7px 4px rgba(0, 0, 0, 0.3) !important;
}
.sec-btn {
  background: linear-gradient(#00b0c2, #86c140);
  color: #ffffff !important;
  border-radius: 12px !important;
}
</style>
