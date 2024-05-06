<script setup>
const store = useDatabaseStore();
const { data: playlists, refresh } = await useFetch(
  "http://localhost:3001/api/playlists"
);

const formDate = (value) => {
  const dateStr = value;
  const date = new Date(dateStr);
  const formattedDate = date.toISOString().split("T")[0];
  return formattedDate;
};

const deletePlaylist = async (playlistId) => {
  console.log("deletePlaylist", playlistId);
  try {
    const data = await $fetch("http://localhost:3001/api/playlist", {
      method: "DELETE",
      body: {
        playlistId: playlistId,
      },
    });

    console.log("deleted");
    refresh();
    store.playlist = !store.playlist;
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="bg-primary ml-5 mt-5">
    <table class="w-full">
      <tbody>
        <!-- row 1 -->
        <tr
          class="group text-white border-0"
          v-for="(playlist, index) in playlists"
          :key="index"
        >
          <td>
            <div class="flex items-center text-white gap-5 mb-5">
              <img src="https://placehold.co/100x100" alt="playlist cover" />
              <nuxt-link
                :to="`/playlist/${playlist.playlistName}`"
                class="pl-2 capitalize hover:text-white active:text-white hover:scale-110 cursor-pointer p-0"
              >
                <p class="text-base">
                  {{ playlist.playlistName }}
                </p>
              </nuxt-link>
            </div>
          </td>
          <td>
            <!-- {{ formDate(playlist.playlistCreatedDate) }} -->
          </td>
          <td>
            <button class="btn btn-circle btn-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:stroke-lime-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                @click="deletePlaylist(playlist.playlistId)"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
