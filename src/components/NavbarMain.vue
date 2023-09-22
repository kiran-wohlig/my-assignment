<template>
  <nav class="navbar mb-4">
    <div class="logo">
      <img src="@/assets/images/wohlig.png" alt="Logo" />
    </div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>
  
<script>
export default {
  name: "NavbarMain",
};
</script>
  
<style scoped>
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
</style>
  