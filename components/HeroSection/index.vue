<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import { storeToRefs } from "pinia";
import HeroSliderItem from "./HeroSliderItem.vue";
import { useHomepageStore } from "@/store/homepage-store";
import { useUiLogic } from "@/composable/useUiLogic";
const homepageStore = useHomepageStore();
const { heroSectionContent } = storeToRefs(homepageStore);
const { isMobile } = useUiLogic();

</script>
<template>
  <section data-scroll-section class="hero-section" id="#hero-section">
    <NavbarBrands v-if="!isMobile" />
    <Carousel v-if="heroSectionContent">
      <Slide
        v-for="(item, index) in heroSectionContent.model.dataSlider"
        :key="index"
      >
        <HeroSliderItem :item="item" />
      </Slide>

      <template #addons>
        <div class="slider-navigator">
          <Navigation />
        </div>
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>
<style lang="scss">
.hero-section {
  position: relative;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  .logo {
    position: absolute;
    top: 10rem;
    left: auto;
    right: auto;
    z-index: 10;
  }
  .carousel__slide {
    height: 100vh;
    width: 100%;
  }

  .slider-navigator {
    position: relative;
    z-index: 11;
    display: flex;
    column-gap: 1.5rem;
    transform: translateY(-5rem);
    width: 100%;
    justify-content: center;
    button {
      position: relative !important;
      color: var(--white-color);
      border-radius: 100%;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      &:not(.carousel__prev--disabled, .carousel__next--disabled):hover {
        border: 1px solid var(--white-color);
        border-radius: 100%;
        transform: scale(1.7) translateY(-10px);
      }
    }
  }
  .carousel__pagination {
    position: absolute;
    z-index: 11;
    left: 10rem;
    bottom: 5rem;
    gap: 10px;
    visibility: hidden;
    .carousel__pagination-item {
      box-sizing: border-box;

      &:hover {
        button.carousel__pagination-button {
          &::before {
            transform: scale(1.7) translateY(0px);
            border: 1px solid var(--white-color);
          }
          &::after {
            background: var(--white-color);
            transform: scale(1) translateY(0px);
          }
        }
      }
    }
  }
}

@media not all and (max-width: 767px) {
  .hero-section {
    .carousel__pagination {
      visibility: visible !important;
    }
    .slider-navigator {
      position: absolute;
      right: 10rem;
      bottom: 5rem;
      width: fit-content;
      justify-content: flex-end;
      transform: translateY(0) translateX(0);
    }
  }
}
</style>
