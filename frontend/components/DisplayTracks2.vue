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
          <tr
            class="group text-white border-0 hover:bg-zinc-700 hover:bg-opacity-50"
            v-for="info in tracksInfo"
            :key="info.trackId"
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
            <td>
              <div class="w-16 h-16">
                <img :src="info.albumCoverUrl" alt="track cover" />
              </div>
            </td>

             <td>
              <div class="flex items-center gap-3 text-white">
                <div>
                  <div class="font-bold">{{ info.trackName }}</div>
                </div>
              </div>
             </td>
            <td>{{ info.actName }}</td>
            <td>
              <nuxt-link
                class="hover:scale-125 font-semibold"
                :to="`/album/${info.albumTitle}`"
                >{{ info.albumTitle }}</nuxt-link
              >
            </td>
            <td>{{ convertToMinutes(info.trackLength) }}</td>
            <td>
              <button class="btn btn-circle btn-outline">
                <svg
                class="h-5 text-white cursor-pointer text-lime-300"
                @click="() => addToFavorites(info.trackId)"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              </button>
              <!-- <svg
                class="h-5 text-white cursor-pointer"
                @click="() => addToFavorites(info.trackId)"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg> -->
            </td>
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

<script setup>
import { defineProps } from "vue";
const store = useDatabaseStore();


const props = defineProps({
  tracksInfo: {
    type: Array,
  },
});

const convertToMinutes = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

async function addToFavorites(Id){
  try {
    const data = await $fetch(`http://localhost:3001/api/favorite/one/${Id}`);
    if (data && data.length > 0) {
      console.log("innan boolen har ändrats: " + data[0].favorite);
      console.log( Id, data[0].favorite)
      updateFavorite(Id, data[0].favorite);
    } else {
      console.log("Data is empty or undefined");
    }
  } catch (error) {
    console.error(error);
  }
}

async function updateFavorite(id, bool) {
      try {
        const response = await $fetch(
          `http://localhost:3001/api/favorite/${id}/${bool}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              favoriteId: id,
              favorite: !bool,
            }),
          }
        );
        console.log("PUT response", response);
      } catch (error) {
        console.error(error);
      }

      store.allFavorites();

    }

</script>

<style scoped>
/* .track-info {
  display: flex;
  align-items: center;
  gap: 3px;
  color: white;
}

td {
  color: white;
}

svg {
  font-size: 12px;
}

button {
  widows: 200px;
  background-color: white;
} */
</style>
