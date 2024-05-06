<script setup>
import {ref, computed, reactive, onMounted, defineEmits} from "vue"

import { useRoute, useRouter } from "vue-router"

const router = useRouter();
const route = useRoute();

const id = ref(route.params.id);

const { data: albums } = await useFetch(
  "http://localhost:3001/api/albums"
);

const { data: albumtracks } = await useFetch(
  "http://localhost:3001/api/albumtracks"
);

const componentKey = ref(0);
const forceRerender = () => {
  componentKey.value += 1;
};

let activeAlbum = ref("");
let activeAlbumNew = ref(0);
function renderAlbum (){

  activeAlbum = event.target.__vnode.children;

  activeAlbumNew = route.params.id;

  console.log(activeAlbumNew);
  forceRerender();
}


const emit = defineEmits(['submit'])

function onEmit() {
  emit('submit');
};

// const props = defineProps({
//   albumNumber: Number
// });

// function collectAlbumId() {
//   activeAlbumNew = $route.params.id;
//   console.log(activeAlbumNew);
// }

</script>

<template>

  <div id="wrapper" :key="componentKey">
    <div class="mb-12">
    <div class="text-xl mb-8" v-for="album in albums" @click="renderAlbum">
      <nuxt-link
            :to="`/albums/${album.albumId}`"
            class="pl-2 capitalize hover:text-white active:text-white hover:scale-110 cursor-pointer p-0"
            >{{ album.albumTitle }}
          </nuxt-link>
      <!-- <h2> {{ album.albumTitle }}</h2> -->
      <img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/>
      <h3>{{ $route.params.id }}</h3>
    </div>
    </div>
  </div>

  <div v-for="albumtrack in albumtracks" class="max-w-fit">
    <p v-if="activeAlbum === albumtrack.albumTitle"> {{ albumtrack.trackName }}</p>
  </div>

  <AlbumTracks @submit="" :albumID="activeAlbumNew"></AlbumTracks>
  <!-- <AlbumTracks /> -->

</template>

<style scoped>
#wrapper {
  max-width: 60%;
}
img {
    max-width: 25%;
  }
</style>
