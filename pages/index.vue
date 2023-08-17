<template>
  <NuxtLayout>
    <main
      :class="{
        'main-shifted': showNavbarContent,
      }"
      data-scroll-container
      ref="scrollElement"
    >
      <HeroSection />
      <ResortSection />
      <StaySection />
      <DinnerSection />
      <RelaxingSection />
      <TestimonialSection />
      <FormSection />
      <FooterSection />
    </main>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useNavbarStore } from "@/store/navbar-store";
import { useHomepageStore } from "@/store/homepage-store";
import { useUiLogic } from "@/composable/useUiLogic";

useHead({
  title: "Jannata Resort and SPA Clone Website",
});
useSeoMeta({
  title: "Jannata Resort and SPA Clone Website",
  ogTitle: "Jannata Resort and SPA Clone Website",
  description: "This is my clone site of Jannata Resort and SPA",
  ogDescription: "This is my clone site of Jannata Resort and SPA",
  ogImage: "https://jannata-resort-clone.vercel.app/image.png",
  twitterCard: "summary_large_image",
});

definePageMeta({
  layout: "default",
});

const navbarStore = useNavbarStore();
const { showNavbarContent } = storeToRefs(navbarStore);
const homepageStore = useHomepageStore();
const { scrollElement } = useUiLogic();
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
  &::-webkit-scrollbar {
    display: none;
  }
  section {
    width: 100vw;
  }

  &.main-shifted {
    transform: translateX(-80%);
  }
}
</style>
