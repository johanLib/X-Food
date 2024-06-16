<script setup>
    import {ref, onMounted} from 'vue'
    const historyImg = ref(null), historyText = ref(null);

    onMounted(() => {
        console.log('Component has been mounted!');
        const elementsToObserve = [
            historyImg.value,
            historyText.value
        ]
        const observerOptions = {
            root: null,
            treshold: 0.1
        }
        const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view')
                observer.unobserve(entry.target)
            }
        })
        }
        const observer = new IntersectionObserver(observerCallback, observerOptions)
        elementsToObserve.forEach(element => {
            if (element) {
                observer.observe(element)
            }
        })
    }) 
</script>
<template>
    <section class="history" id="history">
        <div ref="historyImg" class="history-img">
            <img src="@/assets/images/pizza/md-pizza.webp"
                 loading="lazy"
                 width="1100px"
                 height="868px"
                 alt="">
        </div>

        <div ref="historyText" class="history-text">
            <div>Our History</div>
            <h2>Discover Our Glory begenning</h2>
            <p>We promise you'll enjoy every sweet moment to find your favourite. Eat what you love and save your time.</p>
            <a href="#" class="btn">Learn More</a>
        </div>
    </section>
</template>

<script>
await new Promise(res => setTimeout(res, 1500))
export default {
    name: 'HistoryComponent'
}
</script>