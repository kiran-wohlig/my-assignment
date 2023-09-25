<template>
  <div>
    <navbar-main />
    <header-two />
    <section-one />
    <about-us />
    <believe-in />
    <vision-mission />
    <our-services />
    <lets-work />
    <our-clients />
    <contact-us />
  </div>
</template>

<script>
import AboutUs from "@/components/AboutUs.vue";
import BelieveIn from "@/components/BelieveIn.vue";
import LetsWork from "@/components/LetsWork.vue";
import OurServices from "@/components/OurServices.vue";
import SectionOne from "@/components/SectionOne.vue";
import OurClients from "@/components/OurClients.vue";
import ContactUs from "@/components/ContactUs.vue";
import HeaderTwo from "@/components/HeaderTwo.vue";
import VisionMission from "@/components/VisionMission.vue";
import NavbarMain from "@/components/NavbarMain.vue";


export default {
  components: {
    SectionOne,
    AboutUs,
    BelieveIn,
    OurServices,
    LetsWork,
    ContactUs,
    OurClients,
    HeaderTwo,
    VisionMission,
    NavbarMain,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
