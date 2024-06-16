<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  logo: String,
  toggleLogin: Function,
  toggleSearch: Function,
  toggleSidebar: Function,
  totalQuantity: Number,
  isDark: Function
});

const darkmode = ref(null);
const menu = ref(null);
const navbar = ref(null);

const toggleMenu = () => {
  menu.value.classList.toggle('bx-x');
  navbar.value.classList.toggle('open');
};

const darkMode = () => {
    if(darkmode.value.classList.contains('bx-moon')) {
        darkmode.value.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('dark');
        props.isDark(true);
    }else {
        darkmode.value.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('dark');
        props.isDark(false);
    }
}

const handleScroll = () => {
  if (menu.value && navbar.value) {
    menu.value.classList.remove('bx-x');
    navbar.value.classList.remove('open');
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <header>
        <RouterLink to="/">
        <span class="logo">
            <img :src="props.logo" alt="Home" id="logo" loading="eager" width="100px" height="auto" aria-label="Home">
        </span>
        </RouterLink>
        <ul ref="navbar" class="navbar">
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
        <i class='bx bx-search nav-search' @click="props.toggleSearch"></i>
        <div class="cart-icon-container" @click="props.toggleSidebar">
            <i class='bx bxs-cart'></i>
            <span class="total" id="total">{{props.totalQuantity}}</span>
        </div>
        <i class='bx bx-user nav-login' @click="props.toggleLogin"></i>
        <div ref="menu" class="menuicon bx bx-menu" @click="toggleMenu"></div>
        <div ref="darkmode" class="darkmode bx bx-moon" @click="darkMode"></div>
        </div>
  </header>
</template>