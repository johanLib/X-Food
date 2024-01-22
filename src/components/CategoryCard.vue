<template>
    <div class="category-container">
      <img :src="categoryImage" class="category-img" alt="Category Image" />
      <h3>{{ category.title }}</h3>
      <p>{{ category.categories }}</p>
    </div>
  </template>
  
  <script>
  import Breakfast from '../assets/images/categories/Breakfast.png'
  import Dinner from '../assets/images/categories/Dinner.png'
  import Pastries from '../assets/images/categories/Pastries.png'
  import Lunch from '../assets/images/categories/Lunch.png'
  import Beverages from '../assets/images/categories/Beverages.png'
  import Pizza from '../assets/images/categories/Pizza.png'
  import Burger from '../assets/images/categories/Burger.png'
  import Sushi from '../assets/images/categories/Sushi.png'
  
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
  