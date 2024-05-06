<script setup>
const store = useDatabaseStore();
const { data: playlists, refresh } = await useFetch(
  "http://localhost:3001/api/playlists"
);

watch(
  () => store.playlist,
  () => {
    refresh();
  }
);
</script>

<template>
  <!-- använd invisble för att dölja menyn -->
  <div class="container h-full flex flex-col bg-primary pl-6">
    <h1 class="text-2xl text-white uppercase pt-6">.:music player:.</h1>
    <ul class="menu text-xl mt-8">
      <nuxt-link
        to="/"
        class="text-white mb-5 hover:text-lime-300 active:text-gray-500"
        >All tracks</nuxt-link
      >
      <nuxt-link
        to="/favorites"
        class="text-white mb-5 hover:text-lime-300 active:text-gray-500"
        >Favorites</nuxt-link
      >
      <nuxt-link
<<<<<<< HEAD
        to="/albums"
        class="text-white mb-5 hover:text-lime-300 active:text-gray-500"
=======
        to="/allAlbums"
        class="text-white mb-5 hover:text-gray-300 active:text-gray-500"
>>>>>>> main
        >Albums</nuxt-link
      >
      <nuxt-link
        to="/allPlaylists"
        class="text-white mb-5 hover:text-lime-300 active:text-gray-500"
        >Playlists</nuxt-link
      >
    </ul>

    <div class="container flex flex-col h-full">
      <div
        class="flex flex-row w-full items-center pt-9 gap-3 border-b border-zinc-500 mb-4"
      >
        <!-- <div
          class="container flex flex-row w-full items-center justify-between pr-8"
          > -->
        <h1 class="text-white text-2xl">My playlists</h1>

        <div class="menu">
          <nuxt-link to="/newPlaylist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 512 512"
              class="hover:opacity-50 transform hover:scale-110"
            >
              <path
                fill="none"
                stroke="white"
                stroke-linecap="square"
                stroke-linejoin="round"
                stroke-width="32"
                d="M256 112v288m144-144H112"
              ></path>
            </svg>
          </nuxt-link>
        </div>
      </div>

      <ul class="menu w-fit text-zinc-300 p-0">
        <li v-for="(playlist, index) in playlists" :key="index">
          <nuxt-link
            :to="`/playlist/${playlist.playlistName}`"
            class="pl-2 capitalize hover:text-white active:text-white hover:scale-110 cursor-pointer p-0"
            >{{ playlist.playlistName }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
