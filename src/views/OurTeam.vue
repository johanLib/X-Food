<template>
    <heading class="team-heading">
        <h1 class="sr-only">Team Page</h1>
        <p>Our Team</p>
        <h2>Our Master Chefs</h2>
    </heading>
    <main class="team">
        <TeamDiv 
            v-for="(emp, index) in team.slice(0,8)"
            :key="emp.id"
            class="team-card"
            :index="index"
            :emp="emp"
        />
    </main>
    <a href="#" class="scrolltop" id="scroll-top">
        <i class='bx bxs-up-arrow scrolltop-icon'></i>
    </a>
    <ContactFooter loading="lazy"/>
</template>

<script>
import TeamDiv from '@/components/TeamDiv.vue'
import ContactFooter from '@/components/ContactFooter.vue'
import team from '@/data/team.json'
import { initializeScrollTop } from '@/lib/script'

export default {
    name: 'OurTeam',
    components: {
        TeamDiv,
        ContactFooter
    },
    data() {
        return {
            team: team
        }
    },
    mounted() {
        initializeScrollTop()
    }
}
</script>