<script setup>

<<<<<<< HEAD
const store = useDatabaseStore()

store.trackInfo()
=======

// const { data: allTracks} = await useFetch('http://localhost:3001/api/tracksDetails/')
>>>>>>> main

//   const tracksArray = ref(allTracks._rawValue.map(track => ({ ...track })));
//   console.log(tracksArray.value);
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="h-1/7">
      <DisplayCover />
    </div>
    <div class="h-3/5">
<<<<<<< HEAD
      <DisplayTracks2 :tracksInfo="store.tracks" />
=======
      <!-- <DisplayTracks2 :tracksInfo="tracksArray" /> -->
>>>>>>> main
    </div>
  </div>
</template>

<style scoped></style>
