<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light navbarStyle fixed-top"
    :class="{ scrolled: isScrolled }"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img
          src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/azdqhilnlkpbrvjtwu6u"
          alt="Logo"
          class="logo"
          height="35"
        />
      </router-link>

      <!-- Toggle button for mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links for desktop and mobile -->
      <div
        class="collapse navbar-collapse"
        :class="{ show: isNavbarOpen }"
        id="navbarNav"
      >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mx-3 mt-2">
            <a href="#home">Home</a>
          </li>
          <li class="nav-item mx-4 mt-2">
            <a href="#aboutus">About Us</a>
          </li>
          <li class="nav-item mx-4 mt-2">
            <a href="#services">Services</a>
          </li>
          <li class="nav-item mx-4 mt-2">
            <a href="#workprocess">WorkProcess</a>
          </li>
          <li class="nav-item mx-4 mt-2">
            <a href="#clients">Clients</a>
          </li>
          <li class="nav-item mx-4 mt-2">
            <a href="#contact">Contact</a>
            <!-- <router-link to="/contact" class="nav-link"
              ><a href="#section6"></a></router-link
            > -->
          </li>
          <li class="nav-item mx-4 mt-2">
            <a
              @click="
                logout();
                logoutAuth();
              "
              v-if="$auth.isAuthenticated"
              >Logout</a
            >
          </li>
          <li class="nav-item mx-4 mt-2">
            <a @click="login()" v-if="!$auth.isAuthenticated">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderTwo",
  data() {
    return {
      isNavbarOpen: false,
      isSticky: false,
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    handleScroll() {
      // this.isSticky = window.scrollY > 0;
      if (window.scrollY > 50) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout();
      // this.$router.push("/");
    },
    logoutAuth() {
      localStorage.clear();
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/scss/main.scss";
/* Add your custom styles here */
.logo {
  max-width: 150px;
}

.navbarStyle {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  z-index: 5;
  background-color: transparent;
  box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
  /* Add other styling as needed */
}

.navbar-collapse ul li a {
  font-size: 22px;
  color: #1d1e20 !important;
  text-decoration: none;
}
/* Customize the appearance for mobile view */
@media (max-width: 768px) {
  .navbar-toggler {
    background-color: #ffffff; /* Change the color as needed */
  }

  .collapse.show {
    display: block !important;
  }
  .scrolled {
    position: fixed;
    width: 100%;
    background-color: rgba(177, 27, 27, 0.8);
    transition: background-color 0.3s ease;
    z-index: 1000;
  }

  /* Add additional mobile styles here */
}
</style>
