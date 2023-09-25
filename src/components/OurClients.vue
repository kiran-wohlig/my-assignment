<template>
  <div class="our-services mb-5" id="client">
    <div class="container">
      <div class="text-center mb-4">
        <h2
          class="gilroy-bold"
          :class="$vuetify.breakpoint.mdAndUp ? 'font-48 mt-10' : 'font-28'"
        >
          Our Clients
        </h2>
      </div>
      <div class="row text-center">
        <v-col>
          <div class="text-center">
            <v-img src="@/assets/images/clients.svg"></v-img>
            <!-- <v-img
              :lazy-src="data.img"
              :height="data.height"
              :width="data.width"
              :src="data.img"
            ></v-img> -->
          </div>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/images/clients/Group34.png";
import img2 from "@/assets/images/clients/Group35.png";
import img3 from "@/assets/images/clients/Group36.png";
import img4 from "@/assets/images/clients/Group37.png";
import img5 from "@/assets/images/clients/Group38.png";
import img6 from "@/assets/images/clients/Group39.png";
import img7 from "@/assets/images/clients/Group40.png";
import img8 from "@/assets/images/clients/Group41.png";
import img9 from "@/assets/images/clients/Group42.png";

export default {
  name: "OurServices",
  data() {
    return {
      products: [
        {
          key: 1,
          img: img1,
          width: "172",
          height: "172",
        },
        {
          key: 2,
          img: img2,
          width: "164",
          height: "164",
        },
        {
          key: 3,
          img: img3,
          width: "188",
          height: "188",
        },
        {
          key: 4,
          img: img4,
          width: "172",
          height: "172",
        },
        {
          key: 5,
          img: img5,
          width: "164",
          height: "164",
        },
        {
          key: 6,
          img: img6,
          width: "198",
          height: "188",
        },
        {
          key: 7,
          img: img7,
          width: "164",
          height: "164",
        },
        {
          key: 8,
          img: img8,
          width: "172",
          height: "172",
        },
        {
          key: 9,
          img: img9,
          width: "164",
          height: "164",
        },
      ],
    };
  },
};
</script>

<style>
.our-services {
  font-family: Gilroy-Bold;
}

.service-card {
  /* width: 212px; */
  height: 350px;
}
</style>
