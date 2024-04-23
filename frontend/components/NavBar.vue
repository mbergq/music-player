<script setup></script>

<template>
  <!-- använd invisble för att dölja menyn -->
  <div class="container h-full flex flex-col bg-primary">
    <h1 class="text-4xl text-red-400 uppercase p-6">music player</h1>
    <ul class="menu text-xl">
      <nuxt-link
        to="/"
        class="text-white pl-6 mb-5 hover:text-gray-300 active:text-gray-500"
        >All tracks</nuxt-link
      >
      <nuxt-link
        to="/favorites"
        class="text-white pl-6 hover:text-gray-300 active:text-gray-500"
        >Favorites</nuxt-link
      >
    </ul>

    <!-- <div class="divider divider-info"></div> -->
    <div class="container pl-6 flex flex-col h-full justify-center">
      <div class="flex flex-row items-center gap-8">
        <!-- <div
          class="container flex flex-row w-full items-center justify-between pr-8"
        > -->
        <h1 class="text-white text-2xl">My playlists</h1>
        <div class="menu">
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
        </div>
      </div>
      <ul class="menu w-56 text-zinc-500 p-0">
        <li><a>Playlist 1</a></li>
      </ul>
    </div>
  </div>
</template>
