// https://nuxt.com/docs/api/configuration/nuxt-config

import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": path.resolve(__dirname),
    assets: path.resolve(__dirname, "assets"),
    components: path.resolve(__dirname, "components"),
  },
  modules: ["@pinia/nuxt"],
});
