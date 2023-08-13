<script lang="ts" setup>
import { storeToRefs } from "pinia";

import { useHomepageStore } from "@/store/homepage-store";
import StayImage from "./StayImage.vue";
import { useSectionVisibleLogic } from "@/composable/useSectionVisibleLogic";
import { useStayImageLogic } from "@/composable/useStayImageLogic";
import { CSSProperties } from "nuxt/dist/app/compat/capi";
const homepageStore = useHomepageStore();
const { staySectionContent } = storeToRefs(homepageStore);
const { isSectionVisible, contentStyle } =
  useSectionVisibleLogic("stay-section");

const store = useStayImageLogic();
const { setImageOptions, setBackgroundActive } = store;
const { backgroundActive } = storeToRefs(store);

// const containerStyles = computed<CSSProperties>(() => {
//   return {
//     backgroundImage: backgroundActive.value
//       ? `url(${backgroundActive.value})`
//       : "none",
//     backgroundPosition: "center",
//   };
// });

watch(
  () => [...(staySectionContent.value?.model.dataSlider || [])],
  (value) => {
    setImageOptions(value);
  }
);
</script>

<template>
  <section class="stay-section" id="stay-section" v-if="staySectionContent">
    <div class="container">
      <div class="stay-section__content">
        <h1
          v-html="staySectionContent.model.title"
          :class="{ 'slide-up': isSectionVisible }"
          :style="contentStyle"
        ></h1>
        <p
          v-html="staySectionContent.model.description"
          :class="{ 'slide-up': isSectionVisible }"
          :style="contentStyle"
        ></p>
      </div>
      <div class="stay-section__images">
        <StayImage
          v-for="(sliderItem, index) in staySectionContent.model.dataSlider"
          :key="index"
          :slider-item="sliderItem"
          @mouseenter="() => setBackgroundActive(index)"
          @mouseleave="() => setBackgroundActive(-1)"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.stay-section {
  height: fit-content;
  background: #5f5c68;
  position: relative;
  padding: 50px 0px;
  color: #fff;
  overflow: hidden;
  .container {
    padding-top: 100px;
  }
  .stay-section__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    position: relative;
    transition: transform 0.3s ease-in-out;
    h1 {
      font-size: 1.5rem;
      font-family: "Playfair Display", serif;
      letter-spacing: 5px;
      margin-bottom: 20px;
      text-transform: uppercase;
      font-weight: 400;
      word-wrap: break-word;
    }

    p {
      line-height: 1.25rem;
      font-family: "Open Sans", serif;
      letter-spacing: 1px;
    }
  }
  .stay-section__images {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
    height: 100%;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    overflow: hidden;
    position: relative;
    z-index: 5;
  }

  &::before {
    content: "";
    height: 100%;
    width: 20rem;
    background-repeat: no-repeat;
    background-size: contain;
    top: 5%;
    position: absolute;
    left: 20%;
    background-image: url("/sections/stay/bg.png");
  }
  &::after {
    content: "";
    height: 50%;
    width: 20rem;
    background-repeat: no-repeat;
    background-size: contain;
    bottom: -20%;
    position: absolute;
    right: 20%;
    z-index: 1;
    background-image: url("/sections/stay/bg-right.png");
  }

  @media not all and (max-width: 767px) {
    .stay-section__images {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(1, 1fr);
      column-gap: 2px;
      margin-bottom: 4rem;
      margin-top: 2rem;
    }
    .stay-section__content {
      max-width: 560px;
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
}
</style>
