<script setup>
import { ref } from "vue";
const input = ref("");
const store = useDatabaseStore();

const { data: trackData } = await useFetch("http://localhost:3001/api/tracks");
const { data: albumData } = await useFetch("http://localhost:3001/api/albums");
const { data: playlistData } = await useFetch(
  "http://localhost:3001/api/playlists"
);

const tracks = ref([...trackData.value]);
const albums = ref([...albumData.value]);
const playlists = ref([...playlistData.value]);

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

const filteredTracks = () => {
  const searchString = input.value.toLowerCase();
  return tracks.value.filter((item) => matchesSearch(item, searchString));
};

const filteredAlbums = () => {
  const searchString = input.value.toLowerCase();
  return albums.value.filter((item) => matchesSearch(item, searchString));
};

const filteredPlaylists = () => {
  const searchString = input.value.toLowerCase();
  return playlists.value.filter((item) => matchesSearch(item, searchString));
};

const goToItem = async (item) => {
  console.log(item);
  if (item.playlistName) {
    console.log("klickat på ett spellista");
    await navigateTo({ path: `/playlist/${item.playlistName}` });
  } else if (item.albumTitle && item.albumYear) {
    console.log("klickat på ett album");
  } else if (item.trackName) {
    console.log("Klickat på en låt");
    store.setCurrentTrackPlaying(
      item.trackName,
      item.fileUrl,
      item.actName,
      item.albumTitle
    );
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
    <div class="bg-black" v-if="input.length > 0">
      <h1
        class="text-pink-300 bg-black text-2xl w-40 border-b-4 border-gray-50"
      >
        Tracks
      </h1>
      <div
        class="btn m-2 position-absolute bg-lime-300 text-black border-0"
        v-for="item in filteredTracks()"
        :key="item.id"
      >
        <nuxt-link @click="goToItem(item)">
          {{ item.trackName }}
        </nuxt-link>
      </div>
      <div class="pl-8 text-white" v-if="input && !filteredTracks().length">
        <p class="text-white">Not found</p>
      </div>
      <h1
        class="text-pink-300 bg-black text-2xl w-40 border-b-4 border-gray-50"
      >
        Albums
      </h1>
      <div
        class="btn m-2 position-absolute bg-lime-300 text-black border-0"
        v-for="item in filteredAlbums()"
        :key="item.id"
      >
        <nuxt-link @click="goToItem(item)">
          {{ item.albumTitle }}
        </nuxt-link>
      </div>
      <div class="pl-8 text-white" v-if="input && !filteredAlbums().length">
        <p class="text-white">Not found</p>
      </div>
      <h1
        class="text-pink-300 bg-black text-2xl w-40 border-b-4 border-gray-50"
      >
        Playlists
      </h1>
      <div
        class="btn m-2 position-absolute bg-lime-300 text-black border-0"
        v-for="item in filteredPlaylists()"
        :key="item.id"
      >
        <nuxt-link @click="goToItem(item)">
          {{ item.playlistName }}
        </nuxt-link>
      </div>
      <div class="pl-8 text-white" v-if="input && !filteredPlaylists().length">
        <p class="text-white">Not found</p>
      </div>
    </div>
  </div>
</template>
