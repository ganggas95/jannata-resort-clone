<script lang="ts" setup>
import { type DataSliderTypes } from "@/types/homepage.types";
defineProps<{ item: DataSliderTypes }>();
const sliderItem = ref<HTMLDivElement | null>(null);
</script>
<template>
  <div class="carousel__item slider-item" ref="sliderItem">
    <div class="slider-item__content">
      <div class="slider-item__content-wrapper">
        <p>{{ item.description }}</p>
        <small v-html="item.title"></small>
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
    color: var(--black-color);
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
