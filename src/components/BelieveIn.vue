<template>
  <div class="believe-in">
    <div class="container">
      <div class="text-center mb-4">
        <h2>We Believe In</h2>
      </div>
      <div class="row">
        <v-col md="3" sm="">
          <div class="text-center believe-img">
            <div>
              <v-img
                lazy-src="@/assets/images/Group1.png"
                height="100"
                width="100"
                class="text-center"
                src="@/assets/images/Group1.png"
              ></v-img>
            </div>
            <h3>Proactive</h3>
            <p>We are a products of our choices and not circumstances</p>
          </div>
        </v-col>
        <v-col md="3" sm="">
          <div class="text-center believe-img">
            <div>
              <v-img
                lazy-src="@/assets/images/Group2.png"
                height="100"
                width="100"
                src="@/assets/images/Group2.png"
              ></v-img>
            </div>

            <h3>First things first</h3>
            <p>We put important things first, not urgent</p>
          </div>
        </v-col>

        <v-col md="3" sm="">
          <div class="text-center believe-img">
            <div>
              <v-img
                lazy-src="@/assets/images/Group3.png"
                height="100"
                width="100"
                src="@/assets/images/Group3.png"
              ></v-img>
            </div>

            <h3>End in mind</h3>
            <p>We live by design Not "DEFAULT”</p>
          </div>
        </v-col>
        <v-col md="3" sm="">
          <div class="text-center believe-img">
            <div>
              <v-img
                lazy-src="@/assets/images/Group4.png"
                height="100"
                width="100"
                src="@/assets/images/Group4.png"
              ></v-img>
            </div>

            <h3>Think win-win</h3>
            <p>
              We believe there is plenty of space for everyone & more to share
            </p>
          </div>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BelieveIn",
};
</script>

<style>
.about-us {
  font-family: Gilroy-Bold;
}
.believe-img {
  display: grid;
  place-items: center;
}
</style>
