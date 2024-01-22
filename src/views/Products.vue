<template>
  <a href="#" class="scrolltop" id="scroll-top">
        <i class='bx bxs-up-arrow scrolltop-icon'></i>
  </a>
  <main class="products">
      <h2>Shop</h2>
      <h3>Breakfast</h3>
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
      <h3>Lunch</h3>
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
      <h3>Dinner</h3>
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
      <h3>Beverages</h3>
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
      <h3>Sushi</h3>
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
      <h3>Burger</h3>
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
      <h3>Pizza</h3>
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
      <h3>Pastries</h3>
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
  </main>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import { initializeScrollTop } from '@/script'

export default {
  props: ['inventory', 'addToCart'],
  components: {
      ProductCard
  },
  mounted() {
      initializeScrollTop()
  }
}
</script>