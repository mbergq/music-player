<script setup>
import { ref } from "vue";


// lägg till vilken nummer i ordningen spellistan är i listan dynamiskt här
const editPlaylistTitle = ref("My playlist");
const isEditing = ref(false);

const savePlaylist = async () => {
  isEditing.value = true;
  console.log('post skickad');
  // await $fetch("http://localhost:3001/api/playlists", {
  //   method: "POST",
  //   body: {
  //     "playlistName" : editPlaylistTitle.value,
  //   },
  // });
};
</script>

<template>
  <div class=" bg-primary flex flex-col h-full ">
    <div
      class="text-center bg-secondary w-full"
    >
      <div class="pl-8 m-8 flex">
        <img
          src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
          style="max-width: 300px; max-height: auto"
        />

        <div class="pl-6 flex flex-col justify-center items-center text-white w-full">
          <h2 class="card-title text-2xl" v-if="!isEditing" @click="isEditing=true" >
            {{ editPlaylistTitle }}
          </h2>
          <input type="text" :placeholder="editPlaylistTitle" v-model="editPlaylistTitle"  v-if="isEditing"  @keyup.enter="savePlaylist" @blur="savePlaylist" class="input bg-transparent focus:bg-zinc-800 text-2xl" >
          </input>
        </div>
      </div>
    </div>
    <div
      class="text-center grow w-full h-40"
    >
<!-- Här kan du lägga till låtar till din spellista -->
    </div>
    <div
      class=" h-full"
    >
   <!-- <DisplayTracks /> -->
    </div>
  </div>
</template>
