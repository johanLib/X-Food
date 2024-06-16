<script setup>
import { ref, onMounted, computed } from 'vue';
import { instersectionView } from '@/lib/script';
import ratings from '@/data/ratings.json';

import user1 from '@/assets/images/users/User1.webp';
import user2 from '@/assets/images/users/User2.webp';
import user3 from '@/assets/images/users/User3.webp';
import user4 from '@/assets/images/users/User4.webp';
import user5 from '@/assets/images/users/User5.webp';
import khabib from '@/assets/images/users/Khabib.webp';
import david from '@/assets/images/users/David-Goggins.webp';
import huberman from '@/assets/images/users/Huberman.webp';

const testimonialContainer = ref(null);
const current = ref(0);
const data = ref(ratings);

const imageMap = {
  user1: user1,
  user2: user2,
  user3: user3,
  user4: user4,
  user5: user5,
  khabib: khabib,
  david: david,
  huberman: huberman
};

const userImage = computed(() => {
  const imageName = data.value[current.value].userimage.toLowerCase();
  return imageMap[imageName] || '';
});

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
        <img :src="userImage" loading="lazy" width="500px" height="500px" alt="">
      </div>
      <h3>{{ data[current].fullname }}</h3> <!-- FullName -->
      <span>{{ data[current].location }}</span> <!-- Basic Location -->
      <p>{{ data[current].commentary }}</p> <!-- Commentary -->
      <button class="left-arrow" @click="Prev">&lt;</button>
      <button class="right-arrow" @click="Next">&gt;</button>
    </div>
  </section>
</template>
