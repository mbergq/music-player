<script setup>

import { ref, computed } from "vue";

const store = useDatabaseStore();

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

async function addToFavorites(trackId) {
  try {
    await updateFavorite(trackId, true);
    // Update matchedTracksInfo after adding to favorites
    store.allFavorites(); // Refresh favorites
  } catch (error) {
    console.error(error);
  }
}

async function updateFavorite(id, bool) {
  try {
    await $fetch(`http://localhost:3001/api/favorite/${id}/${bool}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favoriteId: id,
        favorite: bool,
      }),
    });
    console.log("Track favorited successfully.");
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="h-1/7"></div>
    <div class="h-3/5">
      <DisplayTracks2 class="component" :tracks-info="matchedTracksInfo" @addToFavorites="addToFavorites" />
    </div>
  </div>
</template>

<style scoped>

svg{
  color:lime
}
 </style>
