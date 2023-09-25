<template>
  <div>
    <div>
      <v-app-bar app color="primary">
        <!-- Hamburger icon for screens small and down -->
        <v-btn icon @click="toggleMobileNav" class="d-sm-and-down">
          <v-icon>{{ mobileNavOpen ? "mdi-close" : "mdi-menu" }}</v-icon>
        </v-btn>

        <!-- Logo and navigation links for desktop -->
        <v-img
          src="@/assets/images/wohlig.png"
          max-height="48"
          contain
          class="d-none d-sm-and-up"
        ></v-img>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About Us</v-btn>
        <v-btn text to="/contact">Contact Us</v-btn>
        <v-btn text to="/services">Services</v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="mobileNavOpen" app temporary>
        <!-- Logo and navigation links for mobile -->
        <v-img src="@/assets/images/wohlig.png" max-height="48" contain></v-img>
        <v-list>
          <v-list-item to="/">Home</v-list-item>
          <v-list-item to="/about">About Us</v-list-item>
          <v-list-item to="/contact">Contact Us</v-list-item>
          <v-list-item to="/services">Services</v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <v-app-bar app>
      <!-- Logo -->
      <v-img
        src="@/assets/images/wohlig.png"
        max-height="48"
        contain
        class="hidden-sm-and-down"
      ></v-img>
      <v-spacer></v-spacer>

      <!-- Navigation Links (Desktop) -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About Us</v-btn>
        <v-btn text to="/services">Services</v-btn>
        <v-btn text to="/work">Work Process</v-btn>
        <v-btn text to="/clients">Clients</v-btn>
        <v-btn text to="/contact">Contact Us</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
  <!--   
  <v-app-bar app color="white" class="app-bar">
    <v-img src="@/assets/images/wohlig.png" max-height="48" contain></v-img>
    <v-spacer></v-spacer>
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/about">About Us</v-btn>
    <v-btn text to="/contact">Contact Us</v-btn>
    <v-btn text to="/services">Services</v-btn>
  </v-app-bar> -->
  <!-- <nav class="navbar mb-4">
    <div class="logo">
      <img src="@/assets/images/wohlig.png" alt="Logo" />
    </div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav> -->
</template>

<script>
export default {
  name: "NavbarMain",
  data() {
    return {
      mobileNavOpen: false,
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen;
    },
  },
};
</script>

<style scoped>
.app-bar {
  background-color: #ffffff;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #ffffff;
  color: #fff;
}

.logo img {
  height: 40px;
  width: 121px;
}

.links a {
  margin-left: 15px;
  text-decoration: none;
  color: #1d1e20;
}

.links a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  /* Adjust the navigation bar for screens up to 768px wide (typical tablet and mobile sizes) */
  .navbar {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .navbar-left {
    margin-bottom: 20px;
  }

  .nav-links {
    flex-direction: column;
    text-align: center;
  }

  .nav-links li {
    margin: 10px 0;
  }
}

.d-sm-and-down {
  display: block !important;
}
.d-none.d-sm-and-up {
  display: none !important;
}
</style>
