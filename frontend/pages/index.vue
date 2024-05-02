<script setup>
import DisplayTracks2 from '../components/DisplayTracks2.vue';
import DisplayCover from '../components/DisplayCover.vue';

const { data: allTracks} = await useFetch('http://localhost:3001/api/tracksDetails/')

  const tracksArray = ref(allTracks._rawValue.map(track => ({ ...track })));
  console.log(tracksArray.value);

</script>

<template>
  <div class="flex flex-col h-full">
    <div class="h-1/7">
      <DisplayCover />
    </div>
    <div class="h-3/5">
      <DisplayTracks2 :tracksInfo="tracksArray" />
    </div>
  </div>
</template>

<style scoped></style>
