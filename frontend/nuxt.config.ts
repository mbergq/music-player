// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
  ],
  css: [
    "~/assets/css/main.css", // Vägen till din globala CSS-fil
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});