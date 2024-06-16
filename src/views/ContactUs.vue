<template>
    <main>
        <h1 class="sr-only">ContactUs Page</h1>
        <section class="contact-us">
            <div class="contact-container">
                <div class="contact-header">
                    <p>Contact Us</p>
                    <h2>Contact For Any Query</h2>
                </div>
                <div class="contact-information">
                    <div class="">
                        <div class="contact-info">
                            <div class="contact-icon">
                                <i class='bx bxs-map'></i>
                            </div>
                            <div class="contact-text">
                                <h3>Address</h3>
                                <p>478 Casa Street, NY, USA</p>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="contact-info">
                            <div class="contact-icon">
                                <i class='bx bxs-phone'></i>
                            </div>
                            <div class="contact-text">
                                <h3>Call Us</h3>
                                <p>+212 485 0827</p>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="contact-info">
                            <div class="contact-icon">
                                <i class='bx bxs-envelope'></i>
                            </div>
                            <div class="contact-text">
                                <h3>Email Us</h3>
                                <p>seghir000anass@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="contact-info">
                            <div class="contact-icon">
                                <i class='bx bxs-share'></i>
                            </div>
                            <div class="contact-text">
                                <h3>Follow Us</h3>
                                <div class="contact-social">
                                    <a href="" aria-label="facebook page"><i class="bx bxl-facebook"></i></a>
                                    <a href="" aria-label="twitter page"><i class="bx bxl-twitter"></i></a>
                                    <a href="" aria-label="instagram page"><i class="bx bxl-instagram-alt"></i></a>
                                    <a href="" aria-label="youtube page"><i class="bx bxl-youtube"></i></a>
                                    <a href="" aria-label="linkedin page"><i class="bx bxl-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-form">
                    <div class="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349864.828994271!2d-8.6007261!3d33.5898862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd529e2c67ed%3A0x400b759b4b558b0!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1684513135614!5m2!1sen!2sus"
                            frameborder="0"
                            style="border:0;"
                            allowfullscreen=""
                            aria-hidden="false"
                            tabindex="0"
                            title="Google Maps showing Casablanca, Morocco"
                            loading="eager"
                        ></iframe>
                    </div>
                    <div id="success">
                        <form name="sentMessage" id="contactForm" novalidate>
                            <div class="control-group">
                                <label class="sr-only" for="name">Your Name</label>
                                <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required aria-required="true" data-validation-required-message="Please enter your name" autocomplete="name" />
                            </div>
                            <div class="control-group">
                                <label class="sr-only" for="email">Your Email</label>
                                <input type="email" class="form-control" id="contact_email" name="email" placeholder="Your Email" required aria-required="true" data-validation-required-message="Please enter your email" autocomplete="email" />
                            </div>
                            <div class="control-group">
                                <label class="sr-only" for="subject">Subject</label>
                                <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" required aria-required="true" data-validation-required-message="Please enter a subject" autocomplete="off" />
                            </div>
                            <div class="control-group">
                                <label class="sr-only" for="message">Message</label>
                                <textarea class="form-control" id="message" name="message" placeholder="Message" required aria-required="true" data-validation-required-message="Please enter your message" autocomplete="off"></textarea>
                            </div>
                            <div>
                                <button class="btn custom-btn" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
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
const ContactFooter = defineAsyncComponent(() =>
  import('@/components/ContactFooter.vue')
);
import Loading from '@/loaders/Loading.vue'

export default {
    name: 'ContactUs',
    props: ['logo'],
    components: {
        ContactFooter,
        Loading
    }
}
</script>

<style scoped>
:root {
        --main-color: #f24f04;
        --text-color: #252429;
        --bg-color: #fffefb;
        --rr-color: #ffa50a;    
        --other-color: #95949a;
        --bb-color: #fff2de;
        --input-color: #252429;
        --contact-text-p: #454545;

        --big-font: 3.4rem;
        --h2-font: 2.5rem;
        --p-font: 1rem;
}
.contact-us {
    position: relative;
    width: 100%;
    padding: 45px 10% 0;
}
.contact-us .contact-container {
    display: grid;
    grid-template-columns: auto auto;
}
.contact-us .contact-header {
    margin-top: 2.5rem;
    text-align: center;
    grid-area: 1 / 1 / 2 / 3;
}
.contact-us .contact-header p {
    font-weight: 400;
    color: var(--main-color);
}
.contact-us .contact-header h2 {
    font-size: 2rem;
}
.contact-us .contact-information {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, auto));
    align-items: center;
    min-height: 130px;
    margin: 1.5rem 0 30px 0;
    padding: 30px 30px 0 30px;
    background: rgba(0, 0, 0, .04);
    border-radius: 0.8rem;
    grid-area: 2 / 1 / 3 / 3;
}

.contact-us .contact-info {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}

.contact-us .contact-icon {
    position: relative;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--main-color);
    border-radius: 50px;
}

.contact-us .contact-icon i {
    font-size: 18px;
    color: #ffffff;
}

.contact-us .contact-text {
    position: relative;
    width: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    padding-left: 15px;
}

.contact-us .contact-text h3 {
    font-size: 18px;
    font-weight: 700;
    color: #22A699;
}

.contact-us .contact-text p {
    margin: 0;
    font-size: 16px;
    color: var(--contact-text-p);
    word-wrap: break-word;
}
.contact-us .contact-social a {
    margin-right: 10px;
    font-size: 18px;
    color: #f29727;
    transition: all ease 0.5s;
}

.contact-us .contact-social a:hover {
    color: var(--text-color);
}
.contact-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
    grid-area: 3 / 1 / 4 / 3;
    width: 100%;
}
.contact-form .contact-map {
    grid-area: 3 / 1 / 4 / 2;
}

@media screen and (max-width: 630px) {
    .contact-form {
        grid-template-columns: 1fr;
    }

    .contact-form .contact-map {
        grid-area: 1;
    }

    .contact-container .contact-form #success {
        grid-area: 2;
    }
}
.contact-us .contact-form iframe {
    width: 100%;
    height: 380px;
    border-radius: 15px;
    margin-bottom: 25px;
}
.contact-form #success {
    grid-area: 3 / 2 / 4 / 3;
}
.contact-us .contact-form input {
    background: var(--bb-color);
    box-shadow: -1px 15px 26px -4px rgb(161 151 151 / 15%);
    border: none;
    outline: none;
    border-radius: 0.5rem;
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
    color: var(--input-color);
}

.contact-us .contact-form textarea {
    height: 8rem;
    padding: 8px 15px;
    width: 100%;
    background: var(--bb-color);
    color: var(--input);
    box-shadow: -1px 15px 26px -4px rgb(161 151 151 / 15%);
    border: none;
    outline: none;
    border-radius: 0.5rem;
    margin-bottom: 10px;
}
.custom-btn {
    outline: none;
    border: none;
}
</style>