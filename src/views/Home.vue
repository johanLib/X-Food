<template>
  <main>
    <HomeComponent />
    <Suspense>
      <template #default>
        <CategoriesComponent/>
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
    <Suspense>
      <template #default>
        <History/>
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
    <Suspense>
      <template #default>
        <Services/>
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
    <Suspense>
      <template #default>
        <MenuComponent/>
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
    <Suspense>
      <template #default>
        <Testimonial/>
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
    <Suspense>
      <template #default>
        <Newsletter/>
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
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
import { defineAsyncComponent } from 'vue';
import HomeComponent from '@/components/HomeComponent.vue';
import Loading from '@/loaders/Loading.vue';

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

export default {
  name: 'HomeView',
  props: ['logo'],
  components: {
    HomeComponent,
    CategoriesComponent,
    History,
    Services,
    MenuComponent,
    Testimonial,
    Newsletter,
    ContactFooter,
    Loading
  }
}
</script>
