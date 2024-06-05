<template>
    <main>
        <h1 class="sr-only">Categories Page</h1>
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
        <a href="#" class="scrolltop" id="scroll-top">
            <i class='bx bxs-up-arrow scrolltop-icon'></i>
        </a>
        <ContactFooter loading="auto"/>
    </main>
</template>

<script>
import CategoryCard from '@/components/CategoryCard.vue'
import categories from '../data/categories.json'
import ContactFooter from '@/components/ContactFooter.vue'

export default {
    name: 'CategoriesView',
    components: {
        CategoryCard,
        ContactFooter
    },
    data() {
        return {
            data: categories
        }
    }
}
</script>