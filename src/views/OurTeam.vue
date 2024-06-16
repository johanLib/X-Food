<template>
    <heading class="team-heading">
        <h1 class="sr-only">Team Page</h1>
        <p>Our Team</p>
        <h2>Our Master Chefs</h2>
    </heading>
    <main class="team">
        <TeamDiv 
            v-for="(emp, index) in data.slice(0,8)"
            :key="emp.id"
            class="team-card"
            :index="index"
            :emp="emp"
        />
    </main>
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
</template>

<script>
import { defineAsyncComponent } from 'vue';
import TeamDiv from '@/components/TeamDiv.vue'
import team from '@/data/team.json'
const ContactFooter = defineAsyncComponent(() =>
  import('@/components/ContactFooter.vue')
);
import Loading from '@/loaders/Loading.vue'

export default {
    name: 'OurTeam',
    props: ['logo'],
    components: {
        TeamDiv,
        ContactFooter,
        Loading
    },
    data() {
        return {
            data: team
        }
    }
}
</script>