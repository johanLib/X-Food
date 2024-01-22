<template>
    <div class="row">
        <div class="row-img">
            <img :src="productImage" alt="">
            <h5>{{ product.name }}</h5>
            <h6>$ {{ product.price.USD }}</h6>
            <div class="ratings">
                <a href="#"><i class="bx bxs-star"></i></a>
                <a href="#"><i class="bx bxs-star"></i></a>
                <a href="#"><i class="bx bxs-star"></i></a>
                <a href="#"><i class="bx bxs-star"></i></a>
                <a href="#"><i class="bx bxs-star-half"></i></a>
            </div>
            <input type="number" v-model.number="quantity" min="0">
            <div class="menu-btnn" style="margin-top: 1.3rem;">
                <a @click="addToCart(product.name, quantity)" class="btn">Add to cart</a>
            </div>
        </div>
    </div>
</template>

<script>
import Waffle from '../assets/images/menu/Waffle-Nachos.png'
import Fluffy from '../assets/images/menu/Fluffy-Pancakes.png'
import Yogurt from '../assets/images/menu/Yogurt-Fruit-Bowl.png'
import Roasted from '../assets/images/menu/Roasted-Potato-Hash.png'
import BuffaloChicken from '../assets/images/menu/Buffalo-Chicken-Wrap.png'
import Blackened from '../assets/images/menu/Blackened-Prawn-Bowl.png'
import Panera from '../assets/images/menu/Panera-Thai-Chicken.png'
import Spaghetti from '../assets/images/menu/One-Pot_Taco_Spaghetti.png'
import Shredded from '../assets/images/menu/Shredded-Mexican-Chicken.png'
import Creamy from '../assets/images/menu/Creamy-Steak-Fettuccine.png'
import Cafe from '../assets/images/menu/Cafe.png'
import Milk from '../assets/images/menu/Milk.png'
import Soda from '../assets/images/menu/Soda.png'
import Water from '../assets/images/menu/Water.png'
import Maki from '../assets/images/menu/Maki.png'
import Oshizushi from '../assets/images/menu/Oshizushi.png'
import Inarizushi from '../assets/images/menu/Inarizushi.png'
import CheeseBurger from '../assets/images/menu/CheeseBurger.png'
import Turkey from '../assets/images/menu/Turkey-Burger.png'
import Juicy from '../assets/images/menu/Juicy-Lucy.png'
import BigMac from '../assets/images/menu/Big-Mac-Burger.png'
import NewYork from '../assets/images/menu/NewYork-Pizza.png'
import Greek from '../assets/images/menu/Greek-Pizza.png'
import BuffaloPizza from '../assets/images/menu/Buffalo-Pizza.png'
import Chocolate from '../assets/images/menu/Chocolate-Chip-Cookies.png'
import Eggless from '../assets/images/menu/Eggless-Pineapple-Pastry.png'
import Croissants from '../assets/images/menu/Croissants.png'
import Muffin from '../assets/images/menu/Muffin.png'
import Macron from '../assets/images/menu/Macron.png'
import Classic from '../assets/images/menu/Classic-Cake-Donut.png'

export default {
    props: ['product', 'index', 'addToCart'],
    data() {
        return {
            quantity: 0
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
    }
}
</script>

<!-- Completed!-->