<script setup>
import { ref } from 'vue';

const { data: favorites } = await useFetch('http://localhost:3001/api/favorite/true')
const { data: allTracks} = await useFetch('http://localhost:3001/api/tracksDetails/')

const matchedTracksInfo = ref([]);

// Loopa igenom varje favorit
favorites._rawValue.forEach(favorite => {

  // Hitta låten med samma TrackId som favorite.favoriteId
  const matchingTrack = allTracks._rawValue.find(track => track.trackId === favorite.favoriteId);
  if (matchingTrack) {

    // Lägg till informationen om den matchande låten i matchedTracksInfo
    matchedTracksInfo._rawValue.push({
      trackId: matchingTrack.trackId,
      trackName: matchingTrack.trackName,
      actName: matchingTrack.actName,
      albumTitle: matchingTrack.albumTitle,
      trackLength: matchingTrack.trackLength
    });
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
