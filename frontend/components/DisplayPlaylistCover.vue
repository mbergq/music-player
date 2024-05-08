<script setup>
const store = useDatabaseStore();
import { ref } from "vue";
const editPlaylistTitle = ref("New playlist name");
const isEditing = ref(false);
const route = useRoute();
const id = ref(route.params.id);

const {data: playlistData } = await useFetch(`http://localhost:3001/api/playlist/${id.value}`
);

let uniqueAlbumCovers = [];

if (playlistData.value && playlistData.value[0]) {
  uniqueAlbumCovers = playlistData.value[0].reduce((unique, track) => {
    if (!unique.some(album => album.albumCoverUrl === track.albumCoverUrl)) {
      unique.push(track);
    }
    return unique;
  }, []);
}
const gridColumns = computed(() => {
  return Math.min(3, uniqueAlbumCovers.length);
});

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
      <div class="p-9 flex ">
        <div :style="`grid-template-columns: repeat(${gridColumns}, 1fr);`" class="grid gap-1" style="max-width: 300px; max-height: 300px;" >
      <img
      v-for="(track, index) in uniqueAlbumCovers" :key="index"
        :src="track.albumCoverUrl"
        alt="Album"
        style="width: 100%; height: auto; object-fit: cover;"
      />
    </div>
        <div class="pl-6 flex flex-col justify-center text-white">
          <h2 class="text-2xl"  v-if="!isEditing"
          @click="isEditing = true">
          {{ props.playlistTitle }}
        </h2>
        <input type="text" :placeholder="editPlaylistTitle" v-model="editPlaylistTitle"  v-if="isEditing"  @keyup.enter="updatePlaylistName" @blur="updatePlaylistName" class="input bg-transparent placeholder-gray text-white text-center focus:bg-zinc-700 text-4xl mb-6" >
      </input>
    </div>
  </div>
</template>
