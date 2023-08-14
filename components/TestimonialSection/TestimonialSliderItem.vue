<script lang="ts" setup>
import { type DataSliderTypes } from "@/types/homepage.types";
import { useParallax } from "@vueuse/core";
import { CSSProperties } from "nuxt/dist/app/compat/capi";
defineProps<{ item: DataSliderTypes }>();
const sliderItem = ref<HTMLDivElement | null>(null);

// const parallax = useParallax(sliderItem);
// const targetStyles = computed<CSSProperties>(() => {
//   return {
//     transform: `translate3d(${parallax.tilt.value * 50}px, ${
//       parallax.roll.value * 50
//     }px, 0px) scale(1.1)`,
//     width: "100%",
//   };
// });
</script>
<template>
  <div class="carousel__item slider-item" ref="sliderItem">
    <div class="slider-item__content">
      <div class="slider-item__content-wrapper">
        <p>{{ item.description }}</p>
        <small v-html="item.title"></small>
        <!-- 
        <button class="read-more__btn">Read More</button> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.slider-item {
  .slider-item__content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  p,
  small {
    color: #000;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 30px;
    font-family: "Playfair Display", serif;
  }

  small {
    margin-top: 1.5rem;
    font-size: 16px;
  }
}
</style>
