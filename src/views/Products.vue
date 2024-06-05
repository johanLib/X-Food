<template>
  <main class="products">
      <h1 class="sr-only">Shop Page</h1>
      <h2 class="shop-h2">Shop</h2>
      <h3 id="breakfast">Breakfast</h3>
      
      <div class="card-container">
          <ProductCard 
              v-for="(product, index) in inventory.slice(0,4)"
              :key="product.id"
              class="card"
              :index="index"
              :product="product"
              :addToCart="addToCart"
          />
      </div>
      <h3 id="lunch">Lunch</h3>
      <div class="card-container">
          <ProductCard 
              v-for="(product, index) in inventory.slice(4,7)"
              :key="product.id"
              class="card"
              :index="index"
              :product="product"
              :addToCart="addToCart"
          />
      </div>
      <h3 id="dinner">Dinner</h3>
      <div class="card-container">
          <ProductCard 
              v-for="(product, index) in inventory.slice(7,10)"
              :key="product.id"
              class="card"
              :index="index"
              :product="product"
              :addToCart="addToCart"
          />
      </div>
      <h3 id="beverages">Beverages</h3>
      <div class="card-container">
          <ProductCard 
              v-for="(product, index) in inventory.slice(10,14)"
              :key="product.id"
              class="card"
              :index="index"
              :product="product"
              :addToCart="addToCart"
          />
      </div>
      <h3 id="sushi">Sushi</h3>
      <div class="card-container">
          <ProductCard 
              v-for="(product, index) in inventory.slice(14,17)"
              :key="product.id"
              class="card"
              :index="index"
              :product="product"
              :addToCart="addToCart"
          />
      </div>
      <h3 id="burger">Burger</h3>
      <div class="card-container">
          <ProductCard 
              v-for="(product, index) in inventory.slice(17,21)"
              :key="product.id"
              class="card"
              :index="index"
              :product="product"
              :addToCart="addToCart"
          />
      </div>
      <h3 id="pizza">Pizza</h3>
      <div class="card-container">
          <ProductCard 
              v-for="(product, index) in inventory.slice(21,24)"
              :key="product.id"
              class="card"
              :index="index"
              :product="product"
              :addToCart="addToCart"
          />
      </div>
      <h3 id="pastries">Pastries</h3>
      <div class="card-container">
          <ProductCard 
              v-for="(product, index) in inventory.slice(24,30)"
              :key="product.id"
              class="card"
              :index="index"
              :product="product"
              :addToCart="addToCart"
          />
      </div>
      <a href="#" class="scrolltop" id="scroll-top">
            <i class='bx bxs-up-arrow scrolltop-icon'></i>
      </a>
      <ContactFooter/>
  </main>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import ContactFooter from '@/components/ContactFooter.vue'
import { initializeScrollTop } from '@/lib/script'

export default {
  name: 'productsView',
  props: ['inventory', 'addToCart'],
  components: {
      ProductCard,
      ContactFooter
  },
  mounted() {
      initializeScrollTop()
  }
}
</script>