<script setup>
import { ref } from "vue";
const route = useRoute();
const id = ref(route.params.id);

const props = defineProps({
  albumName: String,
  albumCover: Array,
});

const { data: playlistData } = await useFetch(
  `http://localhost:3001/api/playlist/${id.value}`
);

console.log(playlistData);

console.log(props.albumCover);
</script>

<template>
  <div class="p-9 flex">
    <div class="grid gap-1" style="max-width: 300px; max-height: 300px">
      <img
        v-for="(track, index) in props.albumCover"
        :key="index"
        :src="track.albumCoverUrl"
        alt="Album"
        style="width: 100%; height: auto; object-fit: cover"
      />
    </div>
    <div class="pl-6 flex flex-col justify-center text-white">
      <h2 class="text-2xl">
        {{ props.albumName }}
      </h2>
    </div>
  </div>
</template>
