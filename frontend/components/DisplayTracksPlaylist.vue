<script setup>
const props = defineProps({
  playlist: Array,
});

console.log(props.playlist);

const playlistTracks = props.playlist.flat();

console.log(playlistTracks);
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
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr
            class="group text-white border-0"
            v-for="(track, index) in playlistTracks"
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
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
