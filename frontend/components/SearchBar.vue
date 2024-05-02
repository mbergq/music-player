<script setup>
import { ref } from "vue";
const input = ref("");

const { data: searchData, refresh } = await useFetch(
  "http://localhost:3001/api/tracks"
);

const filteredData = () => {
  return searchData.value.filter((track) =>
    track.trackName.toLowerCase().includes(input.value.toLowerCase())
  );
};
</script>

<template>
  <div class="navbar-start w-full h-32 pl-8" style="z-index: 1000">
    <div class="form-control w-full m-4 position-relative">
      <input
        type="text"
        v-model="input"
        placeholder="Search"
        class="input bg-transparent w-80 rounded-full opacity-70 border-2 border-white border-opacity-70 text-white placeholder-white placeholder-opacity-70 focus:border-primary focus:border-opacity-70 focus:border-2 focus:border-white focus:border-opacity-70 focus:bg-transparent focus:placeholder-white focus:placeholder-opacity-70 focus:text-white focus:opacity-70"
      />
    </div>
    <div
      class="btn m-2 position-absolute bg-lime-300 text-black border-0"
      v-for="track in filteredData()"
      :key="track"
      v-if="input.length > 0"
    >
      <p>
        {{ track.trackName }}
      </p>
    </div>
    <div class="pl-8 text-white" v-if="input && !filteredData().length">
      <p>Not found</p>
    </div>
  </div>
</template>
