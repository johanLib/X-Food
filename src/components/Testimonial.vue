<script setup>
import { ref, onMounted } from 'vue';
import { instersectionView } from '@/lib/script';
import ratings from '@/data/ratings.json';

const testimonialContainer = ref(null);
const current = ref(0);
const data = ref(ratings);

onMounted(() => {
    instersectionView(testimonialContainer);
});

const Prev = () => {
  if (current.value > 0) {
    current.value--;
  } else {
    current.value = data.value.length - 1;
  }
};

const Next = () => {
  if (current.value < data.value.length - 1) {
    current.value++;
  } else {
    current.value = 0;
  }
};
</script>

<template>
  <section ref="testimonialContainer" class="testimonial" id="testimonial">
    <div class="testimonial-left">
      <div>Testimonial</div>
      <h2>What People Say</h2>
    </div>

    <div class="testimonial-right">
      <div class="testimonial-img">
        <img :src="data[current].userimage" loading="lazy" width="500px" height="500px" alt="">
      </div>
      <h3>{{ data[current].fullname }}</h3> <!-- FullName -->
      <span>{{ data[current].location }}</span> <!-- Basic Location -->
      <p>{{ data[current].commentary }}</p> <!-- Commentary -->
      <button class="left-arrow" @click="Prev">&lt;</button>
      <button class="right-arrow" @click="Next">&gt;</button>
    </div>
  </section>
</template>

<script>
await new Promise(res => setTimeout(res, 2000))
export default {
  name: 'TestimonialComponent'
}
</script>