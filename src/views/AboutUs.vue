<template>
    <section>
        <h2>About Us</h2>
        <main class="about">
            <div class="about-container">
                <div class="about-text">
                    <div class="text-block">
                        <h3>About X-Food</h3>
                        <p>Welcome to X-Food, where culinary excellence meets your doorstep. Founded in 2019 in the heart of Casablanca, Morocco, X-Food has been on a flavorful journey, bringing the world's finest cuisines directly to your table.X-Food is more than an app; it's a culinary expedition designed to delight your palate. We understand that food is not just sustenance; it's an expression of culture, passion, and joy. Every dish we deliver is crafted with care, ensuring that each bite is a moment of sheer delight.</p>
                        <p class="join-us">Embark on a gastronomic voyage with X-Food. Discover new flavors, relish familiar favorites, and let the aromas of our carefully curated menu fill your space. Welcome to X-Food – where every bite tells a story.</p>
                        <a class="btn">View Servives</a>
                    </div>
                    <div class="text-block">
                        Savor the moments,<br/>
                        <i>X-Food Team</i>
                    </div>
                </div>
                <div class="about-img">
                    <img src="../assets/images/menu/Cafe.png" alt="">
                </div>
            </div>
        </main>
    </section>
</template>

<script>

export default {
name: 'AboutUs'
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

        --big-font: 3.4rem;
        --h2-font: 2.5rem;
        --p-font: 1rem;
    }
    h2 {
        text-align: center;
        margin-bottom: 30px;
    }
    h2::after {
        position: absolute;
        content: '';
        height: 3px;
        bottom: 520px;
        width: 5%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 2px;
        background: var(--main-color);
    }
    .about {
        font-size: 1.1em;
        line-height: 1.6;
    }
    .about-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        transition: all ease .50s;
    }
    .about-text {
        width: 700px;     
        padding: 2.5rem 2rem 0;
    }
    .about-text h3 {
        color: var(--main-color);
    }
    .about-text a {
        margin-top: 1rem;
    }
    .about-img {
        position: relative;
        display: inline-block;
        padding-top: 2.5rem;
    }
    .about-img img {
        width: 400px;
        border-radius: 1rem;
    }
    .text-block {
        margin-bottom: 1.5rem;
    }
    .join-us {
        font-weight: 700;
        color: #22A699;
    }
</style>