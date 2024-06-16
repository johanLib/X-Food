<template>
  <div class="category-container">
    <RouterLink :to="{ path: '/Products', hash: `#${category.title.toLowerCase()}` }" v-bind:aria-label="category.title">
      <img :src="categoryImage" class="category-img" alt="" />
    </RouterLink>
    <RouterLink :to="{ path: '/Products', hash: `#${category.title.toLowerCase()}` }">
      <h3>{{ category.title }}</h3>
    </RouterLink>
    <p>{{ category.categories }}</p>
  </div>
</template>
  
<script>
  import Breakfast from '@/assets/images/categories/Breakfast.webp'
  import Dinner from '@/assets/images/categories/Dinner.webp'
  import Pastries from '@/assets/images/categories/Pastries.webp'
  import Lunch from '@/assets/images/categories/Lunch.webp'
  import Beverages from '@/assets/images/categories/Beverages.webp'
  import Pizza from '@/assets/images/categories/Pizza.webp'
  import Burger from '@/assets/images/categories/Burger.webp'
  import Sushi from '@/assets/images/categories/Sushi.webp'

  export default {
    props: ['category'],
    computed: {
      categoryImage() {
        const imageName = this.category.img.toLowerCase();
        
        const imageMap = {
          breakfast: Breakfast,
          dinner: Dinner,
          pastries: Pastries,
          lunch: Lunch,
          beverages: Beverages,
          pizza: Pizza,
          burger: Burger,
          sushi: Sushi
        };
  
        return imageMap[imageName] || '';
      }
    }
  }
</script>
  