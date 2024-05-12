<script setup>
const store = useDatabaseStore();
store.trackInfo();


</script>

<template>
  <div class="flex flex-col h-full">
    <div class="h-1/7"></div>
    <div class="h-3/5">
      <DisplayTracks2 :tracksInfo="store.tracks" />
    </div>
  </div>
</template>

<style scoped></style>
