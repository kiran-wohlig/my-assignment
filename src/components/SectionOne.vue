<template>
  <div class="section-one mt-10" id="home">
    <div>
      <v-row :class="$vuetify.breakpoint.mdAndUp ? 'aboutus' : ''" no-gutters>
        <v-col cols="12" sm="12" md="6">
          <h1
            class="font-64 gilroy-bold"
            :class="$vuetify.breakpoint.mdAndUp ? 'font-64 mt-10' : 'font-28'"
          >
            Transforming the <br />Perspective <br />
            of <span class="typed-text">{{ typeValue }}</span>
            <span
              :class="
                $vuetify.breakpoint.mdAndUp
                  ? 'blinking-cursor'
                  : 'blinking-cursor-mob'
              "
              >|</span
            >
            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
          </h1>
          <p
            class="gilroy-medium font-weight-medium"
            :class="$vuetify.breakpoint.mdAndUp ? 'font-24' : 'font-16'"
          >
            The catalyst that empowers to take advantage <br />of the digital
            revolution.
          </p>
          <v-btn
            class="ma-2 sec-btn gilroy-semibold"
            height="52"
            width="263"
            :class="$vuetify.breakpoint.mdAndUp ? 'font-24 ' : 'font-16'"
          >
            Lets work together
          </v-btn>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-img
            lazy-src="@/assets/images/worldhand.jpg"
            src="@/assets/images/worldhand.jpg"
          ></v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectOne",
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Innovation", "Research", "Technology"],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<style scoped>
.sec-btn {
  background: linear-gradient(#00b0c2, #86c140);
  color: #ffffff !important;
  border-radius: 12px !important;
  text-transform: capitalize;
}

.blinking-cursor {
  font-size: 6rem;
  color: #00b0c2;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #00b0c2;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #00b0c2;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #00b0c2;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #00b0c2;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #00b0c2;
  }
}
.typed-text {
  color: #00b0c2;
}
.blinking-cursor-mob {
  font-size: 2rem;
  color: #00b0c2;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
</style>
