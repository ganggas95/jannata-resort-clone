<script lang="ts" setup>
import { type DataSliderTypes } from "@/types/homepage.types";
import { useParallax } from "@vueuse/core";
import { CSSProperties } from "nuxt/dist/app/compat/capi";
defineProps<{ item: DataSliderTypes }>();
const sliderItem = ref<HTMLDivElement | null>(null);

const parallax = useParallax(sliderItem);
const targetStyles = computed<CSSProperties>(() => {
  return {
    transform: `translate3d(${parallax.tilt.value * 50}px, ${
      parallax.roll.value * 50
    }px, 0px) scale(1.1)`,
    width: "100%",
  };
});
</script>
<template>
  <div class="carousel__item slider-item" ref="sliderItem">
    <div class="slider-item__content">
      <div class="slider-item__content-wrapper">
        <h1 v-html="item.title"></h1>
        <p>{{ item.description }}</p>
        <button class="read-more__btn">Read More</button>
      </div>
    </div>
  </div>
  <div class="image-wrapper" :style="targetStyles">
    <img
      :src="
        item.featured.aws_file_url + item.featured.path + item.featured.filename
      "
      alt=""
    />
  </div>
</template>

<style lang="scss" scoped>
.slider-item {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;

  .slider-item__content {
    color: #fff !important;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    padding-bottom: 10rem;
    z-index: 2;

    .slider-item__content-wrapper {
      gap: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        font-family: "Playfair Display", serif;
        font-size: 24px;
        letter-spacing: 5px;
        font-weight: 400;
      }
      p {
        font-size: 10px;
        letter-spacing: 2px;
        max-width: 20rem;
        text-align: center;
      }
      .read-more__btn {
        color: #fff;
        border: 1px solid #fff;
        text-transform: uppercase;
        letter-spacing: 0.125rem;
        background: transparent;
        padding: 1rem 2rem;
        max-width: fit-content;
      }
    }
  }
}
.carousel__slide {
  .image-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    z-index: 1;
    background-position: 50%;
    background-size: cover;
    visibility: visible;
    opacity: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &:not(.carousel__slide--active) {
    .image-wrapper {
      visibility: hidden;
      opacity: 0;
    }
  }
}

@media not all and (max-width: 767px) {
.slider-item {
  h1 {

    font-size: 43px !important;
  }
  p {
    font-size: 12px !important;
    max-width: 30rem !important;
  }
}
}
</style>
