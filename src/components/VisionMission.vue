<template>
  <div class="section-one mb-10" id="" style="margin-bottom: 40px">
    <div class="container">
      <div class="row">
        <div
          class="gilroy-bold"
          :class="$vuetify.breakpoint.mdAndUp ? 'font-48 mt-10' : 'font-28'"
        >
          Vision & Mission
        </div>
        <v-col cols="12" sm="12" md="6">
          <v-card color="#00B0C2" dark class="pa-4 card card-left-to-right">
            <div
              class="text-center"
              :class="$vuetify.breakpoint.mdAndUp ? 'font-5' : 'font-3'"
            >
              Vision
            </div>
            <v-card-text class="text--white">
              <div
                class="text-center gilroy-medium"
                :class="$vuetify.breakpoint.mdAndUp ? 'font-4' : 'font-2'"
              >
                To be a benchmark company in the industry that stands for
                Innovation, Integrity, Accountability And Commitment.
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="6"></v-col>
      </div>
      <div class="row mb-5">
        <v-col cols="12" sm="12" md="6"></v-col>
        <v-col cols="12" sm="12" md="6">
          <v-card color="#86C140" dark class="pa-4 card card-right-to-left">
            <div
              class="text-center"
              :class="$vuetify.breakpoint.mdAndUp ? 'font-5' : 'font-3'"
            >
              Mission
            </div>

            <v-card-text class="text--white text-center">
              <div
                class="text-center gilroy-medium"
                :class="$vuetify.breakpoint.mdAndUp ? 'font-4' : 'font-2'"
              >
                To be a benchmark company in the industry that stands for
                Innovation, Integrity, Accountability And Commitment.
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </div>
      <div
        class="row"
        :class="$vuetify.breakpoint.mdAndUp ? 'partner' : ''"
        no-gutters
      >
        <v-col cols="12" sm="12" md="6">
          <h2
            class="mb-4 gilroy-bold"
            :class="$vuetify.breakpoint.mdAndUp ? 'font-48 mt-10' : 'font-28'"
          >
            Wohlig partners with <br />
            Shopify
          </h2>
          <div
            :class="
              $vuetify.breakpoint.mdAndUp
                ? 'd-flex justify-space-between'
                : 'd-grid place-items-center'
            "
          >
            <div>
              <v-img
                lazy-src="@/assets/images/wohlig.svg"
                src="@/assets/images/wohlig.svg"
              ></v-img>
            </div>
            <div>
              <v-img
                lazy-src="@/assets/images/image3.svg"
                src="@/assets/images/image3.svg"
              ></v-img>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <div>
            <v-img
              lazy-src="@/assets/images/partner.svg"
              src="@/assets/images/partner.svg"
            ></v-img>
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
.section-one {
  font-family: Gilroy-Bold;
  .card {
    margin: 10px;

    overflow: hidden;

    transform: scale(0);

    transition: transform 1s ease-in-out;
  }

  .card-left-to-right {
    animation: slideLeftToRight 1s forwards;
  }

  .card-right-to-left {
    animation: slideRightToLeft 1s forwards;
  }

  @keyframes slideLeftToRight {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideRightToLeft {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }
}
.sec-btn {
  background: linear-gradient(#00b0c2, #86c140);
  color: #ffffff !important;
  border-radius: 12px !important;
}
.custom-center {
  text-align: center;
}
.partner {
  display: grid;
  place-items: center;
}
</style>
