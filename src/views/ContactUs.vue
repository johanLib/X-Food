<template>
    <div class="contact-us">
            <div class="contact-container">
                <div class="contact-header">
                    <h3>Contact Us</h3>
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
                                    <a href=""><i class="bx bxl-facebook"></i></a>
                                    <a href=""><i class="bx bxl-twitter"></i></a>
                                    <a href=""><i class="bx bxl-instagram-alt"></i></a>
                                    <a href=""><i class="bx bxl-youtube"></i></a>
                                    <a href=""><i class="bx bxl-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-form">
                    <div class="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1600663868074!5m2!1sen!2sbd" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <div id="success">
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div class="control-group">
                                <input type="text" class="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                            </div>
                            <div class="control-group">
                                <input type="email" class="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                            </div>
                            <div class="control-group">
                                <input type="text" class="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                            </div>
                            <div class="control-group">
                                <textarea class="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                            </div>
                            <div>
                                <button class="btn custom-btn" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

export default {
name: 'ContactUs'
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
    display: flex;
    flex-direction: column;
}
.contact-us .contact-header {
    margin-top: 2.5rem;
    text-align: center;
}
.contact-us .contact-header h3 {
    font-weight: 400;
    color: var(--main-color);
}
.contact-us .contact-header h2 {
    font-size: 2rem;
}
.contact-us .contact-information {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 130px;
    margin: 1.5rem 0 30px 0;
    padding: 30px 30px 0 30px;
    background: rgba(0, 0, 0, .04);
    border-radius: 0.8rem;
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
    display: flex;
}
.contact-form .contact-map {
    width: 48%;
    margin-right: 4%;
}
.contact-us .contact-form iframe {
    width: 100%;
    height: 380px;
    border-radius: 15px;
    margin-bottom: 25px;
}
.contact-form #success {
    width: 48%;
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