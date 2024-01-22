<template>
        <div class="team-item">
            <div class="team-img">
                <img :src="teamImage" alt="Image">
                <div class="team-social">
                    <a href="#"><i class="bx bxl-facebook"></i></a>
                    <a href="#"><i class="bx bxl-twitter"></i></a>
                    <a href="#"><i class="bx bxl-instagram-alt"></i></a>
                    <a href="#"><i class="bx bxl-linkedin"></i></a>
                </div>
            </div>
            <div class="team-text">
                <h2>{{ emp.name }}</h2>
                <p>{{ emp.job }}</p>
            </div>
        </div>
</template>

<script>
import Hannibal from '../assets/images/team/Hannibal-Lecter.png'
import Gordon from '../assets/images/team/Gordon-Ramsay.png'
import James from '../assets/images/team/James-Doe.png'
import Mohammed from '../assets/images/team/Mohammed-Rabii.png'
import William from '../assets/images/team/William-Tenson.png'
import Said from '../assets/images/team/Said-Hamza.png'
import Rick from '../assets/images/team/Rick-Johnson.png'
import Adam from '../assets/images/team/Adam-Phillips.png'

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