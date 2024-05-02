<template>
    <div class="w-full p-8 border">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead class="text-white">
            <tr class="border-0">
              <th>Track</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Tid</th>
              <th>Favorit</th>
            </tr>
          </thead>
          <tbody style="background-color: red;" class="max-h-20 ">
            <tr v-for="info in tracksInfo" :key="info.trackId" >
              <td>
                <div class="track-info">
                  <div class="flex items-center gap-3 text-white">
                    <div class="avatar">
                      <div class="mask w-12 h-12">
                        <img src="https://placehold.co/600x400" alt="track cover" />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold text-xs">{{ info.trackName }}</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div class="text-xs">{{ info.actName }}</div>
              </td>
              <td>
                <div>{{ info.albumTitle }}</div>
              </td>
              <td>
                <div>{{ convertToMinutes(info.trackLength) }}</div>
              </td>
              <td>
                <div class="flex justify-center align-center" >
                    <svg
                    class="h-5 text-white cursor-pointer"
                    @click="toggleFavorite(info.trackId)"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>

  <script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    tracksInfo: {
      type: Array,
      // required: true
    }
  });

  const convertToMinutes = (seconds) =>{
    const minutes = Math.floor(seconds/60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  const toggleFavorite = (trackId) => {
    info.favorite = !info.favorite;
    alert(trackId)

  };
  </script>

  <style scoped>
  .track-info {
    display: flex;
    align-items: center;
    gap: 3px;
    color: white;
  }

  td {
    color: white;
  }

  svg{
    font-size: 12px;
  }
  </style>
