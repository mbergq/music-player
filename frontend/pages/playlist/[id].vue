<script setup>
import { ref } from "vue";
const route = useRoute();
const id = ref(route.params.id);
const { data: playlist } = await useFetch(
  `http://localhost:3001/api/playlist/${id.value}`
);

console.log(playlist.value);
</script>

<template>
  <div class="bg-primary flex flex-col h-full gap-3">
    <DisplayPlaylistCover :playlistTitle="id" />
    <DisplayTracksPlaylist :playlist="playlist" />
  </div>
</template>
