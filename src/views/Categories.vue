<template>
    <main>
        <h1 class="sr-only">Categories Page</h1>
        <h2 class="categories-h2">Categories</h2>
        <section class="category">
            <Suspense>
                <template #default>
                    <CategoryCard
                    v-for="(category, index) in data.slice(0,9)"
                    :key="category.id"
                    class="category-card"
                    :index="index"
                    :category="category"
                    />
                </template>
                <template #fallback>
                    <Loading />
                </template>
            </Suspense>
        </section>
        <a href="#" class="scrolltop" id="scroll-top">
            <i class='bx bxs-up-arrow scrolltop-icon'></i>
        </a>
        <Suspense>
            <template #default>
                <ContactFooter :logo="logo"/>
            </template>
            <template #fallback>
                <Loading />
            </template>
        </Suspense>
    </main>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import categories from '@/data/categories.json'
import Loading from '@/loaders/Loading.vue'
const ContactFooter = defineAsyncComponent({
    loader: () => new Promise(resolve => {
    setTimeout(() => {
      resolve(import('@/components/ContactFooter.vue'));
    }, 1850);
    }),
    loadingComponent: Loading,
    suspensible: true
})
const CategoryCard = defineAsyncComponent({
    loader: () => import('@/components/CategoryCard.vue'),
    loadingComponent: Loading,
    suspensible: true
})

export default {
    name: 'CategoriesView',
    props: ['logo'],
    components: {
        CategoryCard,
        ContactFooter,
        Loading
    },
    data() {
        return {
            data: categories
        }
    }
}
</script>