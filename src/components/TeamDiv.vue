<template>
        <div class="team-item">
            <div class="team-img">
                <img :src="teamImage" :alt="emp.name">
                <div class="team-social">
                    <a href="#" aria-label="facebook page"><i class="bx bxl-facebook"></i></a>
                    <a href="#" aria-label="twitter page"><i class="bx bxl-twitter"></i></a>
                    <a href="#" aria-label="instagram page"><i class="bx bxl-instagram-alt"></i></a>
                    <a href="#" aria-label="linkedin page"><i class="bx bxl-linkedin"></i></a>
                </div>
            </div>
            <div class="team-text">
                <h3>{{ emp.name }}</h3>
                <p>{{ emp.job }}</p>
            </div>
        </div>
</template>

<script>
import Hannibal from '../assets/images/team/Hannibal-Lecter.webp'
import Gordon from '../assets/images/team/Gordon-Ramsay.webp'
import James from '../assets/images/team/James-Doe.webp'
import Mohammed from '../assets/images/team/Mohammed-Rabii.webp'
import William from '../assets/images/team/William-Tenson.webp'
import Said from '../assets/images/team/Said-Hamza.webp'
import Rick from '../assets/images/team/Rick-Johnson.webp'
import Adam from '../assets/images/team/Adam-Phillips.webp'

export default {
    props: ['emp'],
    computed: {
      teamImage() {
        const imageName = this.emp.empPath.toLowerCase();
        
        const imageMap = {
          hannibal: Hannibal,
          gordon: Gordon,
          james: James,
          mohammed: Mohammed,
          william: William,
          said: Said,
          rick: Rick,
          adam: Adam
        };
  
        return imageMap[imageName] || '';
      }
    }
}
</script>