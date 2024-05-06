<script setup>


const props = defineProps({
  tracksInfo: {
    type: Array,
    // required: true
  }
});



</script>

<template>
  <div class="w-full p-8 border" >
    <div class="overflow-x-auto ">
      <table class="table">
        <!-- head -->
        <thead class="text-white">
          <tr class="border-0" ">
            <th>Track</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Tid</th>
            <th>Favorit</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr class="group text-white border-0 w-full" v-for="trackDetails in tracksInfo">
            <td>
              <div class="flex items-center gap-3 text-white" >
                <div class="avatar" >
                  <div class="mask w-12 h-12">
                    <img src="https://placehold.co/600x400" alt="track cover" />
                  </div>
                </div>
                <div>
                  <div class="font-bold text-xs">{{trackDetails.trackName}}</div>
                </div>
              </div>
            </td>
            <td class="text-xs">{{ trackDetails.actName }}</td>
            <td>{{ trackDetails.albumTitle }}</td>
            <td>{{ trackDetails.trackLength }}</td>
            <th>
              <template>
                <svg
                  class="h-8 w-8 text-white cursor-pointer"
                  @click="toggleFavorite( trackDetails.trackId )"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </template>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
