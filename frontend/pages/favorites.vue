<script setup>
import { ref } from "vue";

const store = useDatabaseStore();

store.trackInfo();
store.allFavorites();

const matchedTracksInfo = ref([]);

console.log("store.favorites", store.favorites);

store.favorites.forEach((favorite) => {
  const matchingTrack = store.tracks.find(
    (track) => track.trackId === favorite.favoriteId
  );
  if (matchingTrack) {
    matchedTracksInfo.value.push(matchingTrack);
  } else {
    console.log(
      "Ingen matchande låt hittades för favoritId:",
      favorite.favoriteId
    );
  }
});
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="h-1/7"></div>
    <div class="h-3/5">
      <DisplayFavoritesTracks :tracks-info="matchedTracksInfo" />
    </div>
  </div>
</template>
