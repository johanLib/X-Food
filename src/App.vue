<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <Heading :logo="logo" :toggleSidebar="toggleSidebar" :totalQuantity="totalQuantity"/>
  <RouterView :inventory="isProductsPage ? inventory : null" :addToCart="isProductsPage ? addToCart : null"/>
  <transition name="cart-transition" mode="out-in">
  <Sidebar
      v-if="showSidebar"
      :toggle="toggleSidebar"
      :cart="cart"
      :inventory="inventory"
      :remove="removeItem"
   />
  </transition>
  <Search />
  <Login />
</template>

<script>
  import Heading from '@/components/Heading.vue'
  import Sidebar from '@/components/Sidebar.vue'
  import Search from '@/components/Search.vue'
  import Login from '@/components/Login.vue'
  import food from './data/food.json'
  import logo from '@/assets/images/logo.webp'
  import { initializeDarkMode, initializeMenuToggle, initializeSearch, initializeLogin } from '@/lib/script'

  export default {
    components: {
      Heading,
      Sidebar,
      Search,
      Login
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
        return Object.values(this.cart).reduce((acc, curr) => { return acc + curr }, 0)  
      },
      isProductsPage() {
        return this.$route.name == 'ProductsView';
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