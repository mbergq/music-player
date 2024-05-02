<script setup>
const store = useDatabaseStore();
import { ref } from "vue";
const editPlaylistTitle = ref("New playlist name");
const isEditing = ref(false);
const route = useRoute();
const id = ref(route.params.id);


const props = defineProps({
  playlistTitle: String,
});

const updatePlaylistName = async () => {
  console.log(editPlaylistTitle.value);
  try {
    const data = await $fetch( `http://localhost:3001/api/playlist/${id.value}`, {
      method: "PUT",
      body: {
        playlistName : editPlaylistTitle.value,
      },
    });
    store.playlist = !store.playlist;
    console.log("posted", data.value);
  } catch (error) {
    console.error(error);
  } finally {
    isEditing.value = !isEditing.value;
  }
};
</script>

<template>
  <div class="card lg:card-side shadow-xl pl-9 pt-9 ">
    <figure>
      <img
        src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
        alt="Album"
        style="max-width: 300px; max-height: auto"
      />
    </figure>
    <div class="pl-6 flex flex-col justify-center text-white">
      <h2 class="card-title text-2xl"  v-if="!isEditing"
    @click="isEditing = true">
        {{ props.playlistTitle }}
      </h2>
      <input type="text" :placeholder="editPlaylistTitle" v-model="editPlaylistTitle"  v-if="isEditing"  @keyup.enter="updatePlaylistName" @blur="updatePlaylistName" class="input bg-transparent placeholder-gray text-white text-center focus:bg-zinc-700 text-4xl mb-6" >
          </input>
    </div>
  </div>
</template>
