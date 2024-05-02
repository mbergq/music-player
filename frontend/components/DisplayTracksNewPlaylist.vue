<script setup>
const store = useDatabaseStore();
const { data: tracks } = await useFetch("http://localhost:3001/api/tracks");

const props = defineProps({
  playlistTitle: String,
});

const addTrackToPlaylist = async (_trackId) => {
  const playlists = await $fetch("http://localhost:3001/api/playlists");
  console.log(playlists);

  const playlist = playlists.find(
    (playlist) => playlist.playlistName === props.playlistTitle
  );

  console.log(playlist);
  console.log(props.playlistTitle);
  console.log(_trackId);

  try {
    const data = await $fetch(`http://localhost:3001/api/playlist`, {
      method: "POST",
      body: {
        trackPlaylistT_id: _trackId,
        trackPlaylistP_id: playlist.playlistId,
      },
    });
    store.playlist = !store.playlist;
    console.log("posted");
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="container p-8">
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead class="text-white">
          <tr class="border-0">
            <th class="invisible">Track</th>
            <th>Track</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Duration</th>
            <th class="invisible">Add to playlist</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr
            class="group text-white border-0"
            v-for="(track, index) in tracks"
            :key="index"
          >
            <td>
              <div class="w-16 h-16">
                <img src="https://placehold.co/600x400" alt="track cover" />
              </div>
            </td>
            <td>
              <div class="flex items-center gap-3 text-white">
                <div>
                  <div class="font-bold">{{ track.trackName }}</div>
                </div>
              </div>
            </td>
            <td>{{ track.actName }}</td>
            <td>{{ track.albumTitle }}</td>
            <td>{{ track.trackLength }}</td>
            <th>
              <button
                class="btn btn-outline btn-success"
                @click="addTrackToPlaylist(track.trackId)"
              >
                Add
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
