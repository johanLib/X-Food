<template>
    <section class="contact" id="contact">
        <div class="contact">
            <a href="/" class="logo">
                <img :src="footerlogo" id="footerlogo" alt="Home" width="100px" height="auto">
            </a>

            <div class="icons">
                <a href="" aria-label="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="" aria-label="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="" aria-label="instagram"><i class="bx bxl-instagram-alt"></i></a>
                <a href="" aria-label="youtube"><i class="bx bxl-youtube"></i></a>
            </div>
        </div>

        <div class="contact-box">
            <h3>Support</h3>
            <ul>
                <li><a href="/ContactUs">Contact Us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>

        <div class="contact-box">
            <h3>Links</h3>
            <ul>
                <li><a href="/About">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="/#testimonial">Testimonials</a></li>
            </ul>
        </div>

        <div class="contact-box">
            <h3>Our menu</h3>
            <ul>
                <li><a href="/Products#Breakfast">Breakfast</a></li>
                <li><a href="/Products#Lunch">Lunch</a></li>
                <li><a href="/Products#Dinner">Dinner</a></li>
                <li><a href="/Products#pastries">Specials</a></li>
            </ul>
        </div>
    </section>

    <div class="copyright">
        <p>Created with <span class="heart">&hearts;</span> by Anass Seghir</p>
    </div>

</template>

<script>
import footerlogo from '../assets/images/logo.webp';

export default {
data() {
    return {
      footerlogo
    }
}
}
</script>