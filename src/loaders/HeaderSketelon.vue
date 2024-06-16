<script setup>
    import AnimatedPlaceholder from '@/loaders/AnimatedPlaceholder.vue'
</script>
<template>
    <header>
        <span class="logo">
            <AnimatedPlaceholder width="100px" height="30px"/>
        </span>
        <ul class="navbar">
            <li>
                <AnimatedPlaceholder width="635px" height="30px"/>
            </li>
        </ul>

        <div class="header-icons">
            <AnimatedPlaceholder width="30px" height="30px" borderRadius="50%"/>
            <div class="cart-icon-container">
                <AnimatedPlaceholder width="30px" height="30px" borderRadius="50%"/>
            </div>
            <AnimatedPlaceholder width="30px" height="30px" borderRadius="50%"/>
            <AnimatedPlaceholder class="small-device-icon" width="30px" height="30px" borderRadius="50%"/> <!--for small devices-->
            <AnimatedPlaceholder width="30px" height="30px" borderRadius="50%"/>
        </div>
    </header>
</template>

<style scoped>
    @media (max-width: 600px) {
        .small-device-icon {
            display: block;
        }
    }

    .small-device-icon {
        display: none;
    }

    .header-icons {
        display: flex;
        gap: 8px;
    }
</style>