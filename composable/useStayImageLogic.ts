import { DataSliderTypes, FeaturedTypes } from "@/types/homepage.types";
import { mergeAwsImagePath } from "@/utils/image-utils";
import { defineStore } from "pinia";

export const useStayImageLogic = defineStore("stay-image-store", () => {
  const imageOptions = ref<string[]>([]);
  const indexState = ref(-1);
  const backgroundActive = ref<string | null>(null);

  const setImageOptions = (dataSlider: DataSliderTypes[]) => {
    imageOptions.value = dataSlider.map((slider) => {
      return mergeAwsImagePath(slider.featured_hover as FeaturedTypes);
    });
  };
  const setBackgroundActive = (index: number) => {
    indexState.value = index;
    backgroundActive.value = index >= 0 ? imageOptions.value[index] : null;
  };
  return {
    backgroundActive,
    setImageOptions,
    setBackgroundActive,
    indexState,
    imageOptions,
  };
});
