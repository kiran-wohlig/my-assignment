<template>
  <div class="our-services mb-5">
    <div class="container">
      <div class="text-center mb-4">
        <h2>Our Services</h2>
      </div>
      <div class="row">
        <v-col md="" sm="">
          <div class="text-center">
            <v-card class="pa-2 service-card">
              <div class="text-center believe-img">
                <div>
                  <v-img
                    lazy-src="@/assets/images/Group1.png"
                    height="100"
                    width="100"
                    src="@/assets/images/Group1.png"
                  ></v-img>
                </div>

                <h3>Resource Centre</h3>
                <p>
                  Provides an end-to-end service designed to minimise business
                  risk and rule out potentially expensive mistakes.
                </p>
              </div>
            </v-card>
          </div>
        </v-col>
        <v-col md="" sm="">
          <v-card class="pa-2 service-card">
            <div class="text-center believe-img">
              <div>
                <v-img
                  lazy-src="@/assets/images/Group3.png"
                  height="100"
                  width="100"
                  src="@/assets/images/Group3.png"
                ></v-img>
              </div>

              <h3>Analytics</h3>
              <p>
                Analytics help enterprises get valuable business information and
                insights by analyzing a mixture of structured, semi-structured
                and unstructured data.
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col md="" sm="">
          <v-card class="pa-2 service-card">
            <div class="text-center believe-img">
              <div>
                <v-img
                  lazy-src="@/assets/images/Group2.png"
                  height="100"
                  width="100"
                  src="@/assets/images/Group2.png"
                ></v-img>
              </div>

              <h3>Enterprise Mobility</h3>
              <p>
                All about changing the way enterprises are connecting with
                people and also about how efficiently managing their resources,
                remotely.
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col md="" sm="">
          <v-card class="pa-2 service-card">
            <div class="text-center believe-img">
              <div>
                <v-img
                  lazy-src="@/assets/images/Group2.png"
                  height="100"
                  width="100"
                  src="@/assets/images/Group2.png"
                ></v-img>
              </div>

              <h3>Application Development</h3>
              <p>
                Application Development is our core offering. Our goal is to
                Partner with our customers in their growth plans and to build a
                long term relationship with them.
              </p>
            </div>
          </v-card>
        </v-col>

        <v-col md="" sm="">
          <v-card class="pa-2 service-card">
            <div class="text-center believe-img">
              <div>
                <v-img
                  lazy-src="@/assets/images/Group4.png"
                  height="100"
                  width="100"
                  src="@/assets/images/Group4.png"
                ></v-img>
              </div>

              <h3>Technology Consulting</h3>
              <p>
                Perfect IT consulting partner with well-defined strategies and
                deep domain expertise offering unique solutions.
              </p>
            </div>
          </v-card>
        </v-col>
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
  width: 212px;
  height: 312px;
}
</style>
  