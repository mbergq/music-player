<script setup>
import { ref } from "vue";
const route = useRoute();
const id = ref(route.params.id);
const { data: album } = await useFetch(
  `http://localhost:3001/api/albums/${id.value}`
);
</script>
<template>
  <DisplayAlbumTracks :album-name="album"></DisplayAlbumTracks>
</template>
