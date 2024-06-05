<script setup>
  import { defineAsyncComponent, onMounted } from 'vue';
  import { initializeScrollTop } from '@/lib/script';
  import HomeComponent from '@/components/HomeComponent.vue';

  const CategoriesComponent = defineAsyncComponent(() =>
    import('@/components/CategoriesComponent.vue')
  );
  const History = defineAsyncComponent(() =>
    import('@/components/History.vue')
  );
  const Services = defineAsyncComponent(() =>
    import('@/components/Services.vue')
  );
  const MenuComponent = defineAsyncComponent(() =>
    import('@/components/MenuComponent.vue')
  );
  const Testimonial = defineAsyncComponent(() =>
    import('@/components/Testimonial.vue')
  );
  const Newsletter = defineAsyncComponent(() =>
    import('@/components/Newsletter.vue')
  );
  const ContactFooter = defineAsyncComponent(() =>
    import('@/components/ContactFooter.vue')
  );

  onMounted(() => {
    initializeScrollTop();
  });
</script>

<template>
  <main>
    <HomeComponent />
    <CategoriesComponent />
    <History />
    <Services />
    <MenuComponent />
    <Testimonial />
    <Newsletter />
    <a href="#" class="scrolltop" id="scroll-top">
      <i class='bx bxs-up-arrow scrolltop-icon'></i>
    </a>
    <ContactFooter />
  </main>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
<!-- Completed!-->
