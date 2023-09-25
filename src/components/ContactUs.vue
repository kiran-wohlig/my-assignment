<template>
  <div class="contact-us" id="contact">
    <div class="container">
      <div class="text-center mb-4">
        <h2 :class="$vuetify.breakpoint.mdAndUp ? 'font-48 mt-10' : 'font-28'">Contact Us</h2>
      </div>
      <div class="row">
        <v-col md="3" sm="">
          <div class="text-center">
            <h4
              class="gilroy-bold font-weight-bold"
              :class="$vuetify.breakpoint.mdAndUp ? 'font-4' : 'font-3'"
            >
              MUMBAI OFFICE
            </h4>
            <p :class="$vuetify.breakpoint.mdAndUp ? 'font-16' : 'font-1'">
              Unit No 805 and 806, 8th Floor,Neelkanth Corporate Park,Near
              Vidyavihar Station,Vidyavihar (West), Mumbai 400086,Maharashtra,
              India.CIN: U72900MH2016PTC286381
            </p>
          </div>
        </v-col>
        <v-col md="3" sm="">
          <div class="text-center">
            <h4
              class="gilroy-bold"
              :class="$vuetify.breakpoint.mdAndUp ? 'font-4' : 'font-3'"
            >
              LONDON OFFICE
            </h4>
            <p :class="$vuetify.breakpoint.mdAndUp ? 'font-16' : 'font-1'">
              Robinson Suite 2, 5th Floor, AMBA House, 15 College Road, Harrow,
              HA1 1BA, UK.
            </p>
          </div>
        </v-col>
        <v-col md="3" sm="">
          <div class="text-center">
            <h4
              class="gilroy-bold"
              :class="$vuetify.breakpoint.mdAndUp ? 'font-4' : 'font-3'"
            >
              DUBAI OFFICE
            </h4>
            <p :class="$vuetify.breakpoint.mdAndUp ? 'font-16' : 'font-1'">
              Meydan - Free Zone, The Meydan Hotel, Dubai, U.A.E.Company License
              Number: 2201776.01
            </p>
          </div>
        </v-col>
        <v-col md="3" sm="">
          <div class="text-center">
            <h4
              class="gilroy-bold"
              :class="$vuetify.breakpoint.mdAndUp ? 'font-4' : 'font-3'"
            >
              CONTACT DETAILS
            </h4>
            <p :class="$vuetify.breakpoint.mdAndUp ? 'font-16' : 'font-1'">
              Email: info@wohlig.com
            </p>
          </div>
        </v-col>
      </div>
      <div>
        <div class="text-center font-2 gilroy-regular font-weight-medium">
          Copyright © 2023 Wohlig Transformations Pvt. Ltd.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BelieveIn",
};
</script>

<style lang="scss">
@import "src/assets/scss/main.scss";
.contact-us {
  font-family: Gilroy-Bold;
}
.believe-img {
  display: grid;
  place-items: center;
}
</style>
