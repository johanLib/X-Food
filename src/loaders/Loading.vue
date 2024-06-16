<template>
    <div class="container">
        <AnimatedPlaceholder width="130px" height="130px" borderRadius="10px"/>
        <div class="lines">
            <AnimatedPlaceholder width="100%" height="30px" borderRadius="7px"/>
            <AnimatedPlaceholder width="100%" height="30px" borderRadius="7px"/>
            <AnimatedPlaceholder width="65%" height="30px" borderRadius="7px"/>
        </div>
    </div>
</template>

<script>
import AnimatedPlaceholder from '@/loaders/AnimatedPlaceholder.vue'

export default {
    name: 'CategoryCardSketelon',
    components: {
        AnimatedPlaceholder
    }
}
</script>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: .2fr 1fr;
        gap: 10px;
        background-color: #f1f1f1;
        width: 60%;
        margin: 73px auto 0;
        padding: 10px 10px;
        border-radius: 10px;
    }

    .lines {
        display: flex;
        flex-direction: column;
        gap: 10px
    }
</style>