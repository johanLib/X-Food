<template>
<a href="#" class="scrolltop" id="scroll-top">
    <i class='bx bxs-up-arrow scrolltop-icon'></i>
</a>
<section class="home" id="home">
        <div class="home-text">
            <h1>Indulge in X-Food Delicacies.</h1>
            <p>Discover a symphony of flavors, where each bite is a celebration of culinary excellence and cultural richness.</p>
            <div class="home-btnn">
                <a href="#" class="btn">Order Now</a>
                <a href="#" class="btn2"><span><i class='bx bx-play'></i></span>Culinary Insights</a>
            </div>
        </div>

        <div class="home-img">
            <img :src="heroImage" alt="">
        </div>
    </section>

    <section class="categories" id="categories">
        <div class="center-text">
            <strong>categories</strong>
            <h2>Explore Culinary Delights</h2>
        </div>

        <div class="categories-content">
            <div class="box">
                <div class="box-img">
                    <img :src="cart1" alt="">
                </div>
                <h3>World Bites</h3>
                <p>Experience global flavors with our International Delights, a curated journey through diverse cuisines that transport your taste buds.</p>
            </div>

            <div class="box">
                <div class="box-img">
                    <img :src="cart2" alt="">
                </div>
                <h3>Gourmet Burgers</h3>
                <p>Elevate your burger experience with our Gourmet Burgers, crafted with premium ingredients for a unique and savory taste adventure.</p>
            </div>

            <div class="box">
                <div class="box-img">
                    <img :src="cart3" alt="">
                </div>
                <h3>Sweet Temptations</h3>
                <p>Indulge in Sweet Temptations, a paradise of heavenly pastries and desserts that promise to delight your senses.</p>
            </div>
        </div>
    </section>

    <section class="history" id="history">
        <div class="history-img">
            <img :src="historyImage" alt="">
        </div>

        <div class="history-text">
            <strong>Our History</strong>
            <h2>Discover Our Glory begenning</h2>
            <p>We promise you'll enjoy every sweet moment to find your favourite. Eat what you love and save your time.</p>
            <a href="#" class="btn">Learn More</a>
        </div>
    </section>

    <section class="services" id="services">
        <div class="center-text">
            <strong>Offering</strong>
            <h2>Our amazing services</h2>
        </div>
        
        <div class="services-container">
            <div class="services-content">
                <img class="services-img" src="../assets/images/services/dish.svg" alt="">
                <h3 class="services-title">Excellent food</h3>
                <p class="services-description">Savor the excellence in every bite at our establishment. Our chefs craft each dish with precision, delivering a delightful culinary experience that sets the standard for quality.</p>
            </div>

            <div class="services-content">
                <img class="services-img" src="../assets/images/services/pizza.svg">
                <h3 class="services-title">Fast food</h3>
                <p class="services-description">Experience quick and satisfying flavors with our fast food service. Enjoy deliciousness on the go without compromising speed. Taste the convenience of a swift culinary journey.</p>
            </div>

            <div class="services-content">
                <img class="services-img" src="../assets/images/services/truck.svg">
                <h3 class="services-title">Delivery</h3>
                <p class="services-description">Bringing exceptional flavors to your doorstep, our delivery service ensures a seamless and flavorful experience. Enjoy our delectable creations from the comfort of your home, delivered with reliability and convenience.</p>
            </div>
        </div>
    </section>

    <section class="menu" id="menu">
        <div class="center-text">
            <strong>Our popular Menu</strong>
            <h2>Some Popular Items</h2>
        </div>

        <div class="menu-content">
            <div class="row">
                <div class="row-img">
                    <img :src="menu1" alt="">
                    <h5>Yogurt Fruit Bowl</h5>
                    <h6>$27.99</h6>
                    <div class="ratings">
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star-half"></i></a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="row-img">
                    <img :src="menu2" alt="">
                    <h5>Big Mac Burger</h5>
                    <h6>$31.99</h6>
                    <div class="ratings">
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star-half"></i></a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="row-img">
                    <img :src="menu3" alt="">
                    <h5>Fluffy Pancakes</h5>
                    <h6>$11.99</h6>
                    <div class="ratings">
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star-half"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="menu-btnn">
            <RouterLink to="/Products" class="btn">More Items</RouterLink>
        </div>
    </section>

    <section class="testimonial" id="testimonial">
        <div class="testimonial-left">
            <strong>Testimonial</strong>
            <h2>What People Say</h2>
        </div>

        <div class="testimonial-right">
            <div class="testimonial-img">
                <img :src="user" alt="">
            </div>
            <h4>Anass Seghir</h4>
            <h6>Casablanca, Morocco</h6>
            <p>"The taste was excellent. The service was good, very fast response. The food was delcious, thank you so much.</p>
        </div>
    </section>

    <section class="newsletter">
        <div class="center-text">
            <h2>Subscribe Newsletter</h2>
        </div>

        <form action="">
            <input type="email" name="" placeholder="Enter your email" class="email" required>
            <input type="submit" value="Subscribe" class="btn">
        </form>
    </section>

</template>

<script>
import heroImage from '../assets/images/hero.png';
import cart1 from '../assets/images/food.png';
import cart2 from '../assets/images/burger.png';
import cart3 from '../assets/images/pastries.png';
import historyImage from '../assets/images/pizza.png';
import menu1 from '../assets/images/menu/Yogurt-Fruit-Bowl.png';
import menu2 from '../assets/images/menu/Big-Mac-Burger.png';
import menu3 from '../assets/images/menu/Fluffy-Pancakes.png';
import user from '../assets/images/user.png';
import { initializeScrollTop } from '@/script'

export default {
  name: 'HomeView',
  data() {
    return {
      heroImage,
      cart1,
      cart2,
      cart3,
      historyImage,
      menu1,
      menu2,
      menu3,
      user,
    }
  },
  mounted() {
      initializeScrollTop()
  }
}

</script>

<!-- Completed!-->
