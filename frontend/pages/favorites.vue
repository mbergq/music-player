<script setup>
// import { useFetch } from 'vue';
const { data: favoriter } = await useFetch('http://localhost:3000/api/favorite/true')
console.log(favoriter)
const { data: allTracks, error, refresh} = await useFetch('http://localhost:3000/api/tracks/')

console.log(JSON.stringify(favoriter) + "favoriter")
console.log(JSON.stringify(favoriter.favoriteId) + "favoriteId")
console.log(JSON.stringify(allTracks))
// forEach favoriter.favoriteId === allTracks.trackId

// for(let i= 0; i<favoriter.length; i++){
//   if(favoriter.favoriteId === )

// }

</script>

<template>
  <!-- <div class="bg-primary flex flex-col justify-center items-center h-full">
    <h1 class="mb-5 text-2xl text-white font-bold">All favorites</h1> -->
      <div v-for="favo in favoriter">
        <p> {{favo.favorite}} Här</p>
      </div>
  <div class="hero min-h-full bg-secondary">
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">All favorites</h1>

      </div>
    </div>
  </div>
</template>

