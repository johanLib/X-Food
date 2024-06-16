<script setup>
  import { RouterView } from 'vue-router'
</script>
<template>
  <HeaderComponent :isDark="isDark" :logo="bannerlogo" :toggleLogin="toggleLogin" :toggleSearch="toggleSearch" :toggleSidebar="toggleSidebar" :totalQuantity="totalQuantity"/>
  <RouterView :logo="bannerlogo" :inventory="isProductsPage ? inventory : null" :addToCart="isProductsPage ? addToCart : null"/>
  <transition name="cart-transition" mode="out-in">
  <Sidebar
      v-if="showSidebar"
      :toggle="toggleSidebar"
      :cart="cart"
      :inventory="inventory"
      :remove="removeItem"
   />
  </transition>
  <Search v-if="showSearch"
          :toggle="toggleSearch"/>
  <Login v-if="showLogin"
         :toggle="toggleLogin"/>
</template>

<script>
  import { defineAsyncComponent } from 'vue'
  import { initializeScrollTop } from '@/lib/script'
  import food from '@/data/food.json'
  import logo from '@/assets/images/logo.webp'
  import whitelogo from '@/assets/images/logo-white.webp'
  import HeaderSketelon from '@/loaders/HeaderSketelon.vue'
  const HeaderComponent = defineAsyncComponent({
    loader: () => import('@/components/HeaderComponent.vue'),
    loadingComponent: HeaderSketelon,
    suspensible: false
  })
  const Sidebar = defineAsyncComponent(() => import('@/components/Sidebar.vue'))
  const Search = defineAsyncComponent(() => import('@/components/Search.vue'))
  const Login = defineAsyncComponent(() => import('@/components/Login.vue'))

  export default {
    components: {
      HeaderComponent,
      Sidebar,
      Search,
      Login
    },
    data() {
      return {
        showSearch: false,
        showLogin: false,
        showSidebar: false,
        inventory: food,
        bannerlogo: logo,
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
      toggleLogin() {
        this.showLogin = !this.showLogin
      },
      toggleSearch() {
        this.showSearch = !this.showSearch
      },
      removeItem(name) {
        delete this.cart[name]
      },
      isDark(dark) {
        if(dark) {
          this.bannerlogo = whitelogo
        }
        else {
          this.bannerlogo = logo
        }
      }
    },
    mounted() {
        initializeScrollTop()
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