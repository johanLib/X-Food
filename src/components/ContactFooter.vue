<template>
    <section class="contact" id="contact">
        <div class="contact">
            <a href="#" class="logo">
                <img :src="footerlogo" id="footerlogo" alt="" style="width: 100px;">
            </a>

            <div class="icons">
                <a href=""><i class="bx bxl-facebook"></i></a>
                <a href=""><i class="bx bxl-twitter"></i></a>
                <a href=""><i class="bx bxl-instagram-alt"></i></a>
                <a href=""><i class="bx bxl-youtube"></i></a>
            </div>
        </div>

        <div class="contact-box">
            <h3>Support</h3>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
        </div>

        <div class="contact-box">
            <h3>Links</h3>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Testimonials</a></li>
        </div>

        <div class="contact-box">
            <h3>Our menu</h3>
            <li><a href="#">Breakfast</a></li>
            <li><a href="#">Lunch</a></li>
            <li><a href="#">Dinner</a></li>
            <li><a href="#">Specials</a></li>
        </div>
    </section>

    <div class="copyright">
        <p>Created with <span class="heart">&hearts;</span> by Anass Seghir</p>
    </div>

</template>

<script>
import footerlogo from '../assets/images/logo.png';

export default {
data() {
    return {
      footerlogo
    }
}
}
</script>