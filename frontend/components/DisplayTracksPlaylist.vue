<script setup>
const store = useDatabaseStore();
const props = defineProps({
  playlist: Array,
});

console.log(props.playlist);

const playlistTracks = props.playlist.flat();
const playlistData = playlistTracks.slice(0, -1);

console.log(playlistData);

const convertToMinutes = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};
</script>

<template>
  <div class="container p-8">
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead class="text-white">
          <tr class="border-0">
            <th class="invisible">play</th>
            <!-- <th class="invisible">Track</th> -->
            <th>Track</th>
            <th>Artist</th>
            <th>Album</th>
            <th class="invisible">Duration</th>
            <th class="invisible">favorite</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr
            class="group text-white border-0 hover:bg-zinc-700 hover:bg-opacity-50"
            v-for="(track, index) in playlistData"
            :key="index"
          >
            <td>
              <label class="swap swap-rotate text-xl">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" />

                <div class="swap-off">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="hover:scale-110 active:text-lime-300"
                  >
                    <path
                      fill="none"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986z"
                    ></path>
                  </svg>
                </div>
                <div class="swap-on">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="hover:text-lime-300 active:text-lime-300"
                  >
                    <path
                      fill="currentColor"
                      d="M14 19V5h4v14zm-8 0V5h4v14z"
                    ></path>
                  </svg>
                </div>
              </label>
            </td>
            <!-- <td>
        <div class="w-16 h-16">
          <img src="https://placehold.co/600x400" alt="track cover" />
        </div>
      </td> -->
            <td>
              <div class="flex items-center gap-3 text-white">
                <div>
                  <div class="font-bold">{{ track.trackName }}</div>
                </div>
              </div>
            </td>
            <td>{{ track.actName }}</td>
            <td>
              <nuxt-link class="hover:scale-125 font-semibold" to="/test">{{
                track.albumTitle
              }}</nuxt-link>
            </td>
            <td>{{ convertToMinutes(track.trackLength) }}</td>
            <td>
              <div class="dropdown dropdown-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  tabindex="0"
                  role="button"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M9.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"
                    clipRule="evenodd"
                  ></path>
                </svg>

                <ul
                  tabindex="0"
                  class="dropdown-content z-[1] menu p-2 shadow bg-secondary text-white rounded-box w-52"
                >
                  <li><a>Add to favorites</a></li>
                  <li><a>Add to playlist</a></li>
                  <li><a>Remove from playlist</a></li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
