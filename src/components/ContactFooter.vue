<template>
    <section class="contact" id="contact">
        <div class="contact">
            <RouterLink to="/" class="logo">
                <img :src="logo" id="footerlogo" alt="Home" width="100px" height="auto" loading="lazy">
            </RouterLink>

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
                <li><RouterLink to="/ContactUs">Contact Us</RouterLink></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>

        <div class="contact-box">
            <h3>Links</h3>
            <ul>
                <li><RouterLink to="/About">About Us</RouterLink></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="/#testimonial">Testimonials</a></li>
            </ul>
        </div>

        <div class="contact-box">
            <h3>Our menu</h3>
            <ul>
                <li><RouterLink :to="{ path: '/Products', hash: '#breakfast' }">Breakfast</RouterLink></li>
                <li><RouterLink :to="{ path: '/Products', hash: '#lunch' }">Lunch</RouterLink></li>
                <li><RouterLink :to="{ path: '/Products', hash: '#dinner' }">Dinner</RouterLink></li>
                <li><RouterLink :to="{ path: '/Products', hash: '#pastries' }">Specials</RouterLink></li>
            </ul>
        </div>
    </section>

    <div class="copyright">
        <p>Created with <span class="heart">&hearts;</span> by Anass Seghir</p>
    </div>

</template>

<script>
await new Promise(res => setTimeout(res, 3000))
export default {
    name: 'ContactFooter',
    props: ['logo']
}
</script>