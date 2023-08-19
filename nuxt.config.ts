// https://nuxt.com/docs/api/configuration/nuxt-config

import { alias } from "./aliases";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    ...alias,
  },
  ssr: false,
  modules: [
    "@pinia/nuxt",
    "vue3-carousel-nuxt",
    "@hypernym/nuxt-gsap",
    "nuxt-icon",
    "nuxt-vitest",
  ],
  runtimeConfig: {
    public: {
      WEATHER_API_KEY: process.env.NUXT_WEATHER_API_URL,
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  test: true,
});
