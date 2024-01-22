import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Categories from '../views/Categories.vue'
import OurTeam from '../views/OurTeam.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: Home
    },
    {
      path: '/Products',
      name: 'ProductsView',
      component: Products
    },
    {
      path: '/Categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/OurTeam',
      name: 'OurTeam',
      component: OurTeam
    },
    {
      path: '/About',
      name: 'About',
      component: AboutUs
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})

export default router
