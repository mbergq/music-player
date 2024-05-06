<script setup>
const { data: albums } = await useFetch("http://localhost:3001/api/albums");
</script>

<template>
  <div class="bg-primary ml-5 mt-5">
    <table class="w-full">
      <tbody>
        <!-- row 1 -->
        <tr
          class="group text-white border-0"
          v-for="(album, index) in albums"
          :key="index"
        >
          <td>
            <div class="flex items-center text-white gap-5 mb-5">
              <!-- <img
                :src="`${album.albumCoverUrl}`"
                alt="playlist cover"
                style="max-width: 300px; height: auto"
              /> -->
              <NuxtImg
                :src="`${album.albumCoverUrl}`"
                sizes="sm:50vw md:200px"
              />
              <nuxt-link
                :to="`/album/${album.albumTitle}`"
                class="pl-2 capitalize hover:text-white active:text-white hover:scale-110 cursor-pointer p-0"
              >
                <p class="text-base">
                  {{ album.albumTitle }}
                </p>
              </nuxt-link>
            </div>
          </td>
          <td>
            {{ album.albumYear }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
