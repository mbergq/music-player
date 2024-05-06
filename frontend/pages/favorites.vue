<script setup>
import { ref } from 'vue';

const store = useDatabaseStore();

store.trackInfo();
store.allFavorites();

const matchedTracksInfo = ref([]);

store.favorites.forEach(favorite => {
  const matchingTrack = store.tracks.find(track => track.trackId === favorite.favoriteId);
  if (matchingTrack) {

    matchedTracksInfo.value.push(matchingTrack);
  } else {
    console.log("Ingen matchande låt hittades för favoritId:", favorite.favoriteId);
  }
});

</script>

<template>
  <div class="flex flex-col h-full">
    <div class="h-1/7">
      <DisplayCover />
    </div>
    <div class="h-3/5">
      <DisplayTracks2 :tracksInfo="matchedTracksInfo" />
    </div>
  </div>
</template>
