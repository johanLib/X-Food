<template>
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
await new Promise(res => setTimeout(res, 2000))
export default {
    name: 'NewsletterComponent'
}
</script>