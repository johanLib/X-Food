<script setup>
    import {RouterLink} from 'vue-router'
    import {ref, onMounted} from 'vue'
    import { instersectionView } from '@/lib/script';

    const menuContainer = ref(null)
    onMounted(() => {
        instersectionView(menuContainer);
    })
</script>
<template>
    <section class="menu" id="menu">
        <div class="center-text">
            <strong>Our popular Menu</strong>
            <h2>Some Popular Items</h2>
        </div>

        <div ref="menuContainer" class="menu-content">
            <div class="row">
                <div class="row-img">
                    <RouterLink :to="{ path: '/Products', hash: '#breakfast' }"><img src="@/assets/images/menu/Yogurt-Fruit-Bowl.webp" width="500px" height="500px" loading="lazy" alt="a colorful breakfast bowl containing granola, kiwi slices, pomegranate seeds, blood orange segments, and walnuts served on a white dish"></RouterLink>
                    <h3>Yogurt Fruit Bowl</h3>
                    <span>$27.99</span>
                    <div class="ratings">
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star-half"></i>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="row-img">
                    <RouterLink :to="{ path: '/Products', hash: '#burger' }"><img src="@/assets/images/menu/Big-Mac-Burger.webp" loading="lazy" width="500px" height="500px" alt="a close-up of a vegan burger with two patties, pickles, onions, lettuce and a creamy sauce, all in a sesame seed bun"></RouterLink>
                    <h3>Big Mac Burger</h3>
                    <span>$31.99</span>
                    <div class="ratings">
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star-half"></i>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="row-img">
                    <RouterLink :to="{ path: '/Products', hash: '#breakfast' }"><img src="@/assets/images/menu/Fluffy-Pancakes.webp" loading="lazy" width="500px" height="500px" alt="a stack of three fluffy pancakes topped with blueberries, a red currant, and a small green leaf, served on a white plate with a fork on the side"></RouterLink>
                    <h3>Fluffy Pancakes</h3>
                    <span>$11.99</span>
                    <div class="ratings">
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star-half"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="menu-btnn">
            <RouterLink to="/Products" class="btn">More Items</RouterLink>
        </div>
    </section>
</template>

<script>
await new Promise(res => setTimeout(res, 2000))
 export default {
    name: 'MenuComponent'
}
</script>