<script setup>
  import { RouterLink } from 'vue-router';
</script>
<template>
    <header>
        <RouterLink to="/">
          <span class="logo">
            <img :src="logo" alt="Home" id="logo" loading="eager" width="100px" height="auto" aria-label="Home" :class="{ logo_home: true }">
          </span>
        </RouterLink>
        <ul class="navbar">
          <li class="active">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/Categories">Categories</RouterLink>
          </li>
          <li>
            <RouterLink to="/Products">Shop</RouterLink>
          </li>
          <li>
            <RouterLink to="/OurTeam">Our Team</RouterLink>
          </li>
          <li>
            <RouterLink to="/About">About</RouterLink>
          </li>
          <li>
            <RouterLink to="ContactUs">Contact Us</RouterLink>
          </li>
        </ul>

        <div class="header-icons">
            <i class='bx bx-search nav-search' id="search-btn"></i>
            <div class="cart-icon-container" @click="toggleSidebar">
              <i class='bx bxs-cart'></i>
              <span class="total" id="total">{{totalQuantity}}</span>
            </div>
            <i class='bx bx-user nav-login' id="login-btn"></i>
            <div class="bx bx-menu" id="menu-icon"></div>
            <div class="bx bx-moon" id="darkmode"></div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: ['logo', 'toggleSidebar', 'totalQuantity']
}
</script>