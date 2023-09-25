<template>
  <div class="our-services mt-10 mb-5" id="services">
    <div class="">
      <div class="text-center mb-4">
        <h2 class="font-48 gilroy-bold" :class="$vuetify.breakpoint.mdAndUp ? 'font-48 mt-10' : 'font-28'">Our Services</h2>
      </div>
      <div style="position: relative; margin-bottom: 40px">
        <div class="container">
          <div
            class="row card-container"
            style="position: relative; z-index: 2"
          >
            <v-col>
              <v-card class="pa-2 service-card text-center">
                <div class="text-center believe-img">
                  <div>
                    <v-img
                      lazy-src="@/assets/images/services/serone.svg"
                      src="@/assets/images/services/serone.svg"
                    ></v-img>
                  </div>

                  <h3 class="px-2 font-4 my-2 font-weight-bold">
                    Resource Centre
                  </h3>
                  <p class="px-2 font-2">
                    Provides an end-to-end service designed to minimise business
                    risk and rule out potentially expensive mistakes.
                  </p>
                </div>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="pa-2 service-card fon">
                <div class="text-center believe-img">
                  <div>
                    <v-img
                      lazy-src="@/assets/images/services/sertwo.svg"
                      src="@/assets/images/services/sertwo.svg"
                    ></v-img>
                  </div>

                  <h3 class="px-2 font-4 font-weight-bold my-2">Analytics</h3>
                  <p class="px-2 font-2">
                    Analytics help enterprises get valuable business information
                    and insights by analyzing a mixture of structured,
                    semi-structured and unstructured data.
                  </p>
                </div>
              </v-card>
            </v-col>
            <v-col md="" sm="">
              <v-card class="pa-2 service-card">
                <div class="text-center believe-img">
                  <div>
                    <v-img
                      lazy-src="@/assets/images/services/sertwo.svg"
                      src="@/assets/images/services/sertwo.svg"
                    ></v-img>
                  </div>

                  <h3 class="px-2 font-4 font-weight-bold my-2">
                    Enterprise Mobility
                  </h3>
                  <p class="px-2 font-2">
                    All about changing the way enterprises are connecting with
                    people and also about how efficiently managing their
                    resources, remotely.
                  </p>
                </div>
              </v-card>
            </v-col>
            <v-col md="" sm="">
              <v-card class="pa-2 service-card">
                <div class="text-center believe-img">
                  <div>
                    <v-img
                      lazy-src="@/assets/images/services/sertwo.svg"
                      src="@/assets/images/services/sertwo.svg"
                    ></v-img>
                  </div>

                  <h3 class="px-2 font-4 font-weight-bold my-2">
                    Application Development
                  </h3>
                  <p class="px-2 font-2">
                    Application Development is our core offering. Our goal is to
                    Partner with our customers in their growth plans and to
                    build a long term relationship with them.
                  </p>
                </div>
              </v-card>
            </v-col>

            <v-col md="" sm="">
              <v-card class="pa-2 service-card">
                <div class="text-center believe-img">
                  <div>
                    <v-img
                      lazy-src="@/assets/images/services/servfive.svg"
                      src="@/assets/images/services/servfive.svg"
                    ></v-img>
                  </div>

                  <h3 class="px-2 font-4 font-weight-bold my-2">
                    Technology Consulting
                  </h3>
                  <p class="px-2 font-2">
                    Perfect IT consulting partner with well-defined strategies
                    and deep domain expertise offering unique solutions.
                  </p>
                </div>
              </v-card>
            </v-col>
          </div>
        </div>
        <div
          style="
            height: 200px;
            position: absolute;
            background: linear-gradient(#00b0c2, #86c140);
            bottom: -30px;
            left: 0;
            z-index: 0;
            right: 0;
          "
        ></div>
      </div>
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
.service-card {
  /* width: 212px; */
  height: 350px;
  border-radius: 20px !important;
  box-shadow: 3px 4px 7px 4px rgba(0, 0, 0, 0.3) !important;
  display: grid !important;
  place-items: center !important;
}
@media (max-width: 768px) {
  .card-container {
    flex-direction: column; /* Stack cards vertically on smaller screens */
  }
}
</style>
