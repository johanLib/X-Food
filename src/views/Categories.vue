<template>
    <h2 class="categories-h2">Categories</h2>
    <section class="category">       
        <CategoryCard
            v-for="(category, index) in data.slice(0,9)"
            :key="category.id"
            class="category-card"
            :index="index"
            :category="category"
        />
    </section>
</template>

<script>
import CategoryCard from '@/components/CategoryCard.vue'
import categories from '../categories.json'

export default {
    name: 'Categories',
    components: {
        CategoryCard
    },
    data() {
        return {
            data: categories
        }
    }
}
</script>