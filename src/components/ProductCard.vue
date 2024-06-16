<template>
    <div class="row-product" v-if="showProduct">
        <div class="row-img">
            <img :src="productImage" @click="viewDetails" width="500px" height="500px" :alt="product.name">
            <h4>{{ product.name }}</h4>
            <span>$ {{ product.price.USD }}</span>
            <div class="ratings">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star-half"></i>
            </div>
            <input type="number" v-model.number="quantity" min="0" aria-label="Quantity">
            <div class="menu-btnn" style="margin-top: 1.3rem;">
                <button @click="addToCart(product.name, quantity)" class="btn">Add to cart</button>
            </div>
        </div>
    </div>
    <div class="row-product-details" v-else @click="viewDetails">
        <h4>{{ product.name }}</h4>
        <p class="desc">{{ product.description }}</p>
        <p class="ingr"><strong>Ingredients:</strong> {{ product.ingredients }}</p>
        <div class="infos">
            <p><i class='bx bxs-hot'></i><strong>Calories:</strong> {{ product.calories }} kcal</p>
            <p><i class='bx bx-ruler'></i><strong>Serving Size:</strong> {{ product.serving_size }}</p>
            <p><i class='bx bxs-heart'></i><strong>Allergens:</strong> {{ product.allergens }}</p>
            <p><i class='bx bxs-time'></i><strong>Preparation Time:</strong> {{ product.preparation_time }}</p>
            <p><i class='bx bxs-bookmark-star'></i><strong>Category:</strong> {{ product.category }}</p>
            <p><i class='bx bx-star'></i><strong>Rating:</strong> {{ product.rating }}</p>
            <p><i class='bx bxs-purchase-tag'></i><strong>Tags:</strong> {{ product.tags.join(', ') }}</p>
        </div>
    </div>
</template>

<script>
import Waffle from '../assets/images/menu/Waffle-Nachos.webp'
import Fluffy from '../assets/images/menu/Fluffy-Pancakes.webp'
import Yogurt from '../assets/images/menu/Yogurt-Fruit-Bowl.webp'
import Roasted from '../assets/images/menu/Roasted-Potato-Hash.webp'
import BuffaloChicken from '../assets/images/menu/Buffalo-Chicken-Wrap.webp'
import Blackened from '../assets/images/menu/Blackened-Prawn-Bowl.webp'
import Panera from '../assets/images/menu/Panera-Thai-Chicken.webp'
import Spaghetti from '../assets/images/menu/One-Pot_Taco_Spaghetti.webp'
import Shredded from '../assets/images/menu/Shredded-Mexican-Chicken.webp'
import Creamy from '../assets/images/menu/Creamy-Steak-Fettuccine.webp'
import Cafe from '../assets/images/menu/Cafe.webp'
import Milk from '../assets/images/menu/Milk.webp'
import Soda from '../assets/images/menu/Soda.webp'
import Water from '../assets/images/menu/Water.webp'
import Maki from '../assets/images/menu/Maki.webp'
import Oshizushi from '../assets/images/menu/Oshizushi.webp'
import Inarizushi from '../assets/images/menu/Inarizushi.webp'
import CheeseBurger from '../assets/images/menu/CheeseBurger.webp'
import Turkey from '../assets/images/menu/Turkey-Burger.webp'
import Juicy from '../assets/images/menu/Juicy-Lucy.webp'
import BigMac from '../assets/images/menu/Big-Mac-Burger.webp'
import NewYork from '../assets/images/menu/NewYork-Pizza.webp'
import Greek from '../assets/images/menu/Greek-Pizza.webp'
import BuffaloPizza from '../assets/images/menu/Buffalo-Pizza.webp'
import Chocolate from '../assets/images/menu/Chocolate-Chip-Cookies.webp'
import Eggless from '../assets/images/menu/Eggless-Pineapple-Pastry.webp'
import Croissants from '../assets/images/menu/Croissants.webp'
import Muffin from '../assets/images/menu/Muffin.webp'
import Macron from '../assets/images/menu/Macron.webp'
import Classic from '../assets/images/menu/Classic-Cake-Donut.webp'

export default {
    props: ['product', 'index', 'addToCart'],
    data() {
        return {
            quantity: 0,
            showProduct: true
        }
    },
    computed: {
      productImage() {
        const imageName = this.product.img.toLowerCase();
        
        const imageMap = {
            waffle: Waffle,
            fluffy: Fluffy,
            yogurt: Yogurt,
            roasted: Roasted,
            buffalochicken: BuffaloChicken,
            blackened: Blackened,
            panera: Panera,
            spaghetti: Spaghetti,
            shredded: Shredded,
            creamy: Creamy,
            cafe: Cafe,
            milk: Milk,
            soda: Soda,
            water: Water, 
            maki: Maki,
            oshizushi: Oshizushi,
            inarizushi: Inarizushi,
            cheeseburger: CheeseBurger,
            turkey: Turkey,
            juicy: Juicy,
            bigmac: BigMac,
            newyork: NewYork,
            greek: Greek,
            buffalopizza: BuffaloPizza,
            chocolate: Chocolate,
            eggless: Eggless,
            croissants: Croissants,
            muffin: Muffin,
            macron: Macron,
            classic: Classic
        };
  
        return imageMap[imageName] || '';
      }
    },
    methods: {
        viewDetails() {
            this.showProduct = !this.showProduct;
        }
    }
}
</script>

<!-- Completed!-->