<script setup>
import { watch, ref } from "vue";
const store = useDatabaseStore();
const fileToPlay = ref("");
const { Howl } = useNuxtApp().$howler;
const isPlaying = ref(false);

const sound = new Howl({
  src: [fileToPlay.value],
  format: ["mp3"],
  volume: 0.5,
  html5: true,
  onload: () => {
    console.log("Loaded");
  },
  onend: () => {
    console.log("Finished playing");
  },
});

const showTitleIfPlaying = ref(false);

watch(
  () => store.currentFilePlaying,
  (newVal) => {
    console.log(newVal);
    fileToPlay.value = newVal;
    // Stoppa det nuvarande ljudet
    sound.stop();

    // Ändra källan till det nya ljudet
    sound._src = fileToPlay.value;

    // Ladda om ljudet
    sound.load();

    // Spela upp ljudet när det har laddats
    sound.once("load", function () {
      sound.play();
      store.resetTrackPlaying();
      isPlaying.value = true;
      showTitleIfPlaying.value = true;
    });
  }
);

const play = () => {
  if (sound.playing()) {
    sound.pause();
    isPlaying.value = false;
  } else {
    sound.play();
    isPlaying.value = true;
  }
};
</script>

<template>
  <div
    class="realtive flex flex-row items-center justify-center min-w-screen h-28 bg-secondary text-white"
  >
    <div class="flex items-center absolute left-9 gap-5">
      <p class="mb-1 text-pink-500" v-if="showTitleIfPlaying">
        {{ store.currentActName + " - " + store.currentTrackPlaying }}
      </p>
      <img
        :src="`${store.currentCoverUrl}`"
        style="max-width: 100px; height: auto"
      />
    </div>

    <div class="flex flex-row items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5em"
        height="5em"
        viewBox="0 0 24 24"
        class="hower:text-zinc-300 active:text-zinc-300 focus:text-zinc-300"
        @click="play"
      >
        <path fill="white" d="M5 16.2V7.8l6 4.2zm8-.2V8h2v8zm4 0V8h2v8z"></path>
      </svg>
    </div>
  </div>
</template>
