// https://nuxt.com/docs/api/configuration/nuxt-config

import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": path.resolve(__dirname),
    assets: path.resolve(__dirname, "assets"),
    components: path.resolve(__dirname, "components"),
  },
  ssr: false,
  modules: [
    "@pinia/nuxt",
    "vue3-carousel-nuxt",
    "@hypernym/nuxt-gsap",
    "nuxt-icon",
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      
    }
  }
});
