<script setup>
const props = defineProps({
  albumName: String,
});
console.log(props.albumName);

const { data: albumtracks } = await useFetch(
  "http://localhost:3001/api/albumtracks"
);

</script>

<template>
<div>
  <img src="https://placehold.co/224x224" alt="Album" class="mb-8">
  <div v-for="albumtrack in albumtracks">
    <p v-if="props.albumName === albumtrack.albumTitle">{{albumtrack.trackName}}</p>

  </div>


</div>
</template>
