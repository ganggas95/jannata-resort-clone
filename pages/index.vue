<template>
  <NuxtLayout>
    <main
      :class="{
        'main-shifted': showNavbarContent,
      }"
    >
      <SectionsHeroSection />
    </main>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useNavbarStore } from "@/store/navbar-store";
import { useHomepageStore } from "@/store/homepage-store";

useHead({
  title: "Nuxt App",
});

definePageMeta({
  layout: "default",
});

const navbarStore = useNavbarStore();
const { showNavbarContent } = storeToRefs(navbarStore);
const homepageStore = useHomepageStore();
onMounted(() => {
  homepageStore.fetchHomepageContent();
});
</script>
<style lang="scss">
main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(0);
  transition: transform 1s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
  section {
    width: 100vw;
  }

  &.main-shifted {
    transform: translateX(-80%);
  }
}
</style>
