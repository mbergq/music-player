<script setup>

import { ref, computed } from "vue";

//Hämtar en instans av useDatabaseStore(), alltså pinia
const store = useDatabaseStore();

// kör trackInfo och allFavorites funktionerna i pinia så att de är uppdaterade med senaste datan.
store.trackInfo();
store.allFavorites();

const matchedTracksInfo = computed(() => {
  const tracksInfo = [];
  store.favorites.forEach((favorite) => {
    const matchingTrack = store.tracks.find(
      (track) => track.trackId === favorite.favoriteId
    );
    if (matchingTrack) {
      tracksInfo.push(matchingTrack);
    } else {
      console.log(
        "Ingen matchande låt hittades för favoritId:",
        favorite.favoriteId
      );
    }
  });
  return tracksInfo;
});
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="h-1/7"></div>
    <div class="h-3/5">
      <DisplayTracks2 class="component" :tracks-info="matchedTracksInfo"  />
    </div>
  </div>
</template>

<style scoped>

svg{
  color:lime
}
 </style>
