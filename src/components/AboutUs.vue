<template>
  <div class="about-us mb-5" id="aboutus">
    <div class="">
      <div
        class="row"
        :class="$vuetify.breakpoint.mdAndUp ? 'aboutus' : ''"
        no-gutters
      >
        <v-col cols="12" sm="12" md="5">
          <v-img
            lazy-src="@/assets/images/globe-blue-tech.png"
            src="@/assets/images/globe-blue-tech.png"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="12" md="7">
          <div class="pa-1">
            <h2
              class="gilroy-bold"
              :class="$vuetify.breakpoint.mdAndUp ? 'font-48 mt-10' : 'font-28'"
            >
              About Us
            </h2>
            <p
              class="gilroy-medium"
              :class="$vuetify.breakpoint.mdAndUp ? 'font-24' : 'font-16 px-3'"
            >
              Wohlig is catalyst that transforms the clients perspective of
              technology and empowers them to take advantage of the digital
              revolution that is constantly evolving.
            </p>
            <p
              class="gilroy-medium"
              :class="$vuetify.breakpoint.mdAndUp ? 'font-24' : 'font-16 px-3'"
            >
              We simply want to help you leverage through our expertise to make
              your business efficient, cutting- edge and have a low cost of
              ownership.
            </p>
            <p
              class="gilroy-medium"
              :class="$vuetify.breakpoint.mdAndUp ? 'font-24' : 'font-16 px-3'"
            >
              The core objective from the outset is to give the client a
              scalable paradigm shift through extensive use of modern
              technology, innovation, constant research on upcoming trends and
              malleable operational processes.
            </p>
          </div>
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

<style lang="scss">
@import "src/assets/scss/main.scss";

.aboutus {
  display: grid;
  place-items: center;
}
</style>
