<script setup>
import { ref } from "vue";
const router = useRouter();
const input = ref("");
const store = useDatabaseStore();

const { data: trackData } = await useFetch("http://localhost:3001/api/tracks");
const { data: albumData } = await useFetch("http://localhost:3001/api/albums");
const { data: playlistData } = await useFetch(
  "http://localhost:3001/api/playlists"
);

const allData = ref([
  ...trackData.value,
  ...albumData.value,
  ...playlistData.value,
]);

console.log(allData.value);

const matchesSearch = (item, searchString) => {
  if (item.trackName) {
    return item.trackName.toLowerCase().includes(searchString);
  } else if (item.albumTitle) {
    return item.albumTitle.toLowerCase().includes(searchString);
  } else if (item.playlistName) {
    return item.playlistName.toLowerCase().includes(searchString);
  }
  return false;
};

const filteredData = () => {
  const searchString = input.value.toLowerCase();
  return allData.value.filter((item) => matchesSearch(item, searchString));
};

const goToItem = async (item) => {
  console.log(item);
  if (item.playlistName) {
    console.log("true");
    await navigateTo({ path: `/playlist/${item.playlistName}` });
  } else if (item.albumTitle && item.albumYear) {
    console.log("true");
    router.push({ path: "/test" });
  } else if (item.trackName) {
    console.log("true");
    router.push({ path: "/test" });
    store.setCurrentTrackPlaying(item.trackName, item.fileUrl, item.actName);
    // console.log("Skicka låten till playbar".item.trackName);
  }
  input.value = "";
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
      v-for="item in filteredData()"
      :key="item.id"
      v-if="input.length > 0"
    >
      <nuxt-link @click="goToItem(item)">
        {{ item.trackName || item.albumTitle || item.playlistName }}
      </nuxt-link>
    </div>
    <div class="pl-8 text-white" v-if="input && !filteredData().length">
      <p>Not found</p>
    </div>
  </div>
</template>
