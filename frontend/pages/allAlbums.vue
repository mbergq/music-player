<script setup>
import { ref } from 'vue';

const { data: albums } = await useFetch(
  "http://localhost:3001/api/albums"
);

</script>

<template>
<div>

  <div v-for="album in albums">
  <!-- <p>{{ album.albumCoverUrl }}</p> -->
  <ul class="menu text-xl mt-8">
  <nuxt-link
    :to="`/album/${album.albumTitle}`">
    <p>{{ album.albumTitle }}</p>
  </nuxt-link>
</ul>
<img src="https://placehold.co/224x224" alt="Album">
<p>{{ album.albumYear }}</p>
  </div>
</div>
</template>
