<template>
    <a href="#" class="scrolltop" id="scroll-top">
        <i class='bx bxs-up-arrow scrolltop-icon'></i>
    </a>
    <heading class="team-heading">
    <h3>Our Team</h3>
    <h2>Our Master Chef</h2>
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
</template>

<script>
import TeamDiv from '@/components/TeamDiv.vue'
import team from '@/team.json'
import { initializeScrollTop } from '@/script'

export default {
    name: 'OurTeam',
    components: {
        TeamDiv
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