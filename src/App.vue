<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
     <header>
        <RouterLink to="/">
          <span class="logo">
            <img :src="logo" alt="" id="logo" style="width: 100px;">
          </span>
        </RouterLink>
        <ul class="navbar">
            <RouterLink to="/">
              <li class="active">Home</li>
            </RouterLink>
            <RouterLink to="/Categories">
              <li>Categories</li>
            </RouterLink>
            <RouterLink to="/Products">
              <li>Shop</li>
            </RouterLink>
            <RouterLink to="/OurTeam">
              <li>Our Team</li>
            </RouterLink>
            <RouterLink to="/About">
              <li>About</li>
            </RouterLink>
            <RouterLink to="ContactUs">
              <li>Contact Us</li>
            </RouterLink>
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
  <RouterView :inventory="inventory" :addToCart="addToCart"/>
  
  <transition name="cart-transition" mode="out-in">
  <Sidebar
         v-if="showSidebar"
         :toggle="toggleSidebar"
         :cart="cart"
         :inventory="inventory"
         :remove="removeItem"
   />
   </transition>
      <!--==================== SEARCH ====================-->
      <div class="search" id="search">
         <form action="" class="search-form">
            <i class="bx bx-search search-icon"></i>
            <input type="search" placeholder="What are you looking for?" class="search-input">
         </form>

         <i class="bx bx-x search-close" id="search-close"></i>
      </div>

      <!--==================== LOGIN ====================-->
      <div class="login" id="login">
         <form action="" class="login-form">
            <h2 class="login-title">Log In</h2>
            
            <div class="login-group">
               <div>
                  <label for="email" class="login-label">Email</label>
                  <input type="email" placeholder="Write your email" id="email" class="login-input">
               </div>
               
               <div>
                  <label for="password" class="login-label">Password</label>
                  <input type="password" placeholder="Enter your password" id="password" class="login-input">
               </div>
            </div>

            <div>
               <p class="login-signup">
                  You do not have an account? <a href="#">Sign up</a>
               </p>
   
               <a href="#" class="login-forgot">
                  You forgot your password
               </a>
   
               <button type="submit" class="login-button">Log In</button>
            </div>
         </form>

         <i class="bx bx-x login-close" id="login-close"></i>
      </div>
   <ContactFooter/>
</template>

<script>
  import Sidebar from '@/components/Sidebar.vue'
  import food from './food.json'
  import logo from '@/assets/images/logo.png'
  import { initializeDarkMode, initializeMenuToggle } from '@/script'
  import ContactFooter from '@/components/ContactFooter.vue';
  import { initializeSearch, initializeLogin } from '@/script'

  export default {
    components: {
      Sidebar,
      ContactFooter
    },
    data() {
      return {
        showSidebar: false,
        inventory: food,
        cart: {}
      }
    },
    computed: {
      totalQuantity() {
        return Object.values(this.cart).reduce((acc, curr) => {
          return acc + curr
        }, 0)
      }
    },
    methods: {
      addToCart(name, quantity) {
        if(!this.cart[name]) this.cart[name] = 0
        this.cart[name] += quantity
      },
      toggleSidebar() {
        this.showSidebar = !this.showSidebar
      },
      removeItem(name) {
        delete this.cart[name]
      }
    },
    mounted() {
        initializeDarkMode(),
        initializeMenuToggle(),
        initializeSearch(),
        initializeLogin()
    }
  }
</script>


<style scoped>
.cart-transition-enter-active, .cart-transition-leave-active {
  opacity: 1;
  transform: translateY(0);
}

.cart-transition-enter, .cart-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.5s, transform 0.5s ease-in-out;
}


</style>




