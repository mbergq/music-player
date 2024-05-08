<script setup>
import { ref } from "vue";
const route = useRoute();
const id = ref(route.params.id);
const { data: albums } = await useFetch(
  `http://localhost:3001/api/albums/${id.value}`
);

let uniqueAlbumCovers = [];

if (albums.value && albums.value[0]) {
  uniqueAlbumCovers = albums.value[0].reduce((unique, track) => {
    if (!unique.some((album) => album.albumCoverUrl === track.albumCoverUrl)) {
      unique.push(track);
    }
    return unique;
  }, []);
}
</script>

<template>
  <div>
    <DisplayAlbumCover
      :album-name="id"
      :album-cover="uniqueAlbumCovers"
    ></DisplayAlbumCover>
    <DisplayAlbumTracks :album-data="albums"></DisplayAlbumTracks>
  </div>
</template>
