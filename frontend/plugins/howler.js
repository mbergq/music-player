import { defineNuxtPlugin } from "#app";
import { Howl } from "howler";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("howler", { Howl, Howler });
});
