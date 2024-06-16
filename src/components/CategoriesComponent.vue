<script setup>
    import { ref, onMounted } from 'vue'
    import { instersectionView } from '@/lib/script';

    const categoriesContainer = ref(null)
    onMounted(() => {
        instersectionView(categoriesContainer);
    })
</script>

<template>
    <section class="categories" id="categories">
        <div class="center-text">
            <strong>categories</strong>
            <h2>Explore Culinary Delights</h2>
        </div>

        <div ref="categoriesContainer" class="categories-content">
            <div class="box">
                <div class="box-img">
                    <img src="@/assets/images/food.webp" loading="lazy" width="501px" height="500px" alt="Grilled steak served with a fresh garden salad and a side of mayonnaise">
                </div>
                <h3>World Bites</h3>
                <p>Experience global flavors with our International Delights, a curated journey through diverse cuisines that transport your taste buds.</p>
            </div>

            <div class="box">
                <div class="box-img">
                    <img src="@/assets/images/burger.webp" loading="lazy" width="600px" height="600px" alt="Close-up of a cheeseburger with lettuce, tomato, onion, pickles, and a sesame seed bun">
                </div>
                <h3>Gourmet Burgers</h3>
                <p>Elevate your burger experience with our Gourmet Burgers, crafted with premium ingredients for a unique and savory taste adventure.</p>
            </div>

            <div class="box">
                <div class="box-img">
                    <img src="@/assets/images/pastries.webp" loading="lazy" width="512px" height="512px" alt="Plate of assorted pastries and donuts with various toppings and decorations">
                </div>
                <h3>Sweet Temptations</h3>
                <p>Indulge in Sweet Temptations, a paradise of heavenly pastries and desserts that promise to delight your senses.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CategoriesComponent'
}
</script>