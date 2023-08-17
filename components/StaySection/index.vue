<script lang="ts" setup>
import { storeToRefs } from "pinia";

import { useHomepageStore } from "@/store/homepage-store";
import StayImage from "./StayImage.vue";
import { useSectionVisibleLogic } from "@/composable/useSectionVisibleLogic";
import { useSingelSliderImageLogic } from "@/composable/useStayImageLogic";

const sectionElement = ref<HTMLElement | null>(null);
const homepageStore = useHomepageStore();
const { staySectionContent } = storeToRefs(homepageStore);
const { isSectionVisible, scrollPosition } =
  useSectionVisibleLogic(sectionElement);

const store = useSingelSliderImageLogic();
const { setImageOptions, setBackgroundActive } = store;

watch(
  () => [...(staySectionContent.value?.model.dataSlider || [])],
  (value) => {
    setImageOptions(value);
  }
);

const contentStyle = computed(() => {
  return {
    transform: `translateY(-${scrollPosition.value.y * 0.01}px)`,
  };
});
</script>

<template>
  <section class="stay-section" id="stay-section" v-if="staySectionContent">
    <div class="container">
      <div class="stay-section__content" :style="contentStyle">
        <h1
          :class="{ 'slide-right': isSectionVisible }"
          v-html="staySectionContent.model.title"
        ></h1>
        <p
          :class="{ 'slide-left': isSectionVisible }"
          v-html="staySectionContent.model.description"
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
  background: var(--primary-color);
  position: relative;
  padding: 50px 0px;
  color: var(--white-color);
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
}

@media not all and (max-width: 767px) {
  .stay-section {
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
