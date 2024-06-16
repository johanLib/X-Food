<template>
    <div class="search" id="search">
         <form action="" class="search-form">
            <i class="bx bx-search search-icon"></i>
            <input type="search" placeholder="What are you looking for?" class="search-input">
         </form>

         <i class="bx bx-x search-close" @click="toggle"></i>
      </div>
</template>

<script>
export default {
    name: 'SearchComponent',
    props: ['toggle']
}
</script>