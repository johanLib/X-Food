<script setup>
    import {ref, onMounted} from 'vue'
    import { instersectionView } from '@/lib/script';

    const servicesContainer = ref(null)

    onMounted(() => {
        instersectionView(servicesContainer);
    })
</script>
<template>
    <section class="services" id="services">
        <div class="center-text">
            <strong>Offering</strong>
            <h2>Our amazing services</h2>
        </div>
        
        <div ref="servicesContainer" class="services-container">
            <div class="services-content">
                <img class="services-img" src="@/assets/images/services/dish.svg" loading="lazy" alt="dish icon">
                <h3 class="services-title">Excellent food</h3>
                <p class="services-description">Savor the excellence in every bite at our establishment. Our chefs craft each dish with precision, delivering a delightful culinary experience that sets the standard for quality.</p>
            </div>

            <div class="services-content">
                <img class="services-img" src="@/assets/images/services/pizza.svg" loading="lazy" alt="pizza icon">
                <h3 class="services-title">Fast food</h3>
                <p class="services-description">Experience quick and satisfying flavors with our fast food service. Enjoy deliciousness on the go without compromising speed. Taste the convenience of a swift culinary journey.</p>
            </div>

            <div class="services-content">
                <img class="services-img" src="@/assets/images/services/truck.svg" loading="lazy" alt="truck icon">
                <h3 class="services-title">Delivery</h3>
                <p class="services-description">Bringing exceptional flavors to your doorstep, our delivery service ensures a seamless and flavorful experience. Enjoy our delectable creations from the comfort of your home, delivered with reliability and convenience.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ServicesComponent'
}
</script>