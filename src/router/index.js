import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/Products',
      name: 'ProductsView',
      component: () => import('../views/Products.vue'),
      props: {
        inventory: "inventory",
        addToCart: "addToCart"
      }
    },
    {
      path: '/Categories',
      name: 'Categories',
      component: () => import('../views/Categories.vue')
    },
    {
      path: '/OurTeam',
      name: 'OurTeam',
      component: () => import('../views/OurTeam.vue')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../views/AboutUs.vue')
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: () => import('../views/ContactUs.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { left: 0, top: 0 };
  },
})

export default router
