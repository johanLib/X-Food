<script setup>
    import { ref, onMounted } from 'vue'
    import { instersectionView } from '@/lib/script';

    const testimonialContainer = ref(null)
    onMounted(() => {
        instersectionView(testimonialContainer);
    })
</script>

<template>
    <section ref="testimonialContainer" class="testimonial" id="testimonial">
        <div class="testimonial-left">
            <div>Testimonial</div>
            <h2>What People Say</h2>
        </div>

        <div class="testimonial-right">
            <div class="testimonial-img">
                <img src="../assets/images/user.webp" loading="lazy" width="500px" height="500px" alt="">
            </div>
            <h3>Anass Seghir</h3>
            <span>Casablanca, Morocco</span>
            <p>"The taste was excellent. The service was good, very fast response. The food was delcious, thank you so much.</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TestimonialComponent'
}
</script>