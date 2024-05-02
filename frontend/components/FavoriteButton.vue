<script setup>
import { ref } from 'vue';

const props = defineProps({
  tracksInfo: {
    type: Array,
    required: true
  }
});

const favorites = ref([]);


// Kontrollera om spåret är en favorit
const isTrackFavorite = (trackId) => {
  return favoriteIds.includes(trackId);
};

// Lägg till eller ta bort spåret från favoriter
const toggleFavorite = (trackId) => {
  if (isTrackFavorite(trackId)) {
    favorites.value = favorites.value.filter(id => id !== trackId);
  } else {
    favorites.value.push(trackId);
  }
};
</script>

<template>
  <button @click="$emit('toggle')" :class="{ 'bg-green-500 text-white': isFavorite, 'bg-white text-black': !isFavorite }">
    {{ isFavorite ? 'Ta bort från favoriter' : 'Lägg till som favorit' }}
  </button>
</template>
