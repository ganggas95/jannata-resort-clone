<script setup lang="ts">
import { CSSProperties } from "nuxt/dist/app/compat/capi";
import { DataSliderTypes } from "@/types/homepage.types";
import { useStayImageLogic } from "@/composable/useStayImageLogic";
import { mergeAwsImagePath } from "@/utils/image-utils";
import { storeToRefs } from "pinia";

const props = defineProps<{ sliderItem: DataSliderTypes; index: number }>();
const store = useStayImageLogic();
const { backgroundActive, indexState } = storeToRefs(store);
const backgroundImage = computed(() => {
  return mergeAwsImagePath(props.sliderItem.featured);
});

const imageChangerStyle = computed<CSSProperties>(() => {
  return {
    backgroundImage: `url(${backgroundActive.value})`,
    backgroundPosition: `${(props.index / 4) * 132}% center`,
  };
});

const imageStyle = computed<CSSProperties>(() => {
  return {
    backgroundImage: `url(${backgroundImage.value})`,
  };
});
</script>
<template>
  <a :href="sliderItem.link?.url" class="stay-section__link">
    <div class="stay-section__image" :style="imageStyle"></div>
    <div
      class="stay-section__image-changer"
      :class="{
        show: indexState > -1,
      }"
      :style="imageChangerStyle"
    ></div>
    <div class="stay-section__image--content">
      <h1 class="stay-section__image--content-title">
        {{ sliderItem.link?.title }}
      </h1>
    </div>
  </a>
</template>
<style lang="scss" scoped>
.stay-section__link {
  width: 100%;
  height: 150px;
  position: relative;
  overflow: hidden;

  .stay-section__image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    top: 0;
    left: 0;
    position: absolute;
  }
  .stay-section__image--content {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    h1.stay-section__image--content-title {
      color: #fff;
      font-size: 11px;
      letter-spacing: 2px;
      line-height: 30px;
      position: absolute;
      font-weight: 300;
      text-transform: uppercase;
      box-sizing: content-box;
      bottom: 5%;
      left: 10%;
      margin-bottom: 35px;
      &::before {
        content: "";
        width: 100px;
        height: 1px;
        position: absolute;
        top: -5px;
        background-color: #fff;
        transition: all .3s ease;
      }
    }
  }

  @media not all and (max-width: 767px) {
    height: 360px;
    &:hover {
      h1.stay-section__image--content-title {
        &::before {
          width: 150px;
        }
      }
    }
    .stay-section__image-changer {
      width: 98%;
      height: 100%;
      background-color: #333107;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: auto 100%;
      top: 0;
      left: 0;
      position: absolute;
      transform: translateX(-105%);
      transition: transform 0.3s ease;

      &.show {
        transform: translateX(0);
        width: 100%;
        background-size: 400% 100%;
      }
    }
  }
}
</style>
