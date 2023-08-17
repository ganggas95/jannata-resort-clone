import { DataSliderTypes, FeaturedTypes } from "@/types/homepage.types";
import { mergeAwsImagePath } from "@/utils/image-utils";
import { defineStore } from "pinia";

export const useSingelSliderImageLogic = defineStore("stay-image-store", () => {
  const imageOptions = ref<string[]>([]);
  const indexState = ref(-1);
  const backgroundActive = ref<string | null>(null);

  const setImageOptions = (dataSlider: DataSliderTypes[]) => {
    /**
     * Sets the image options for the slider.
     *
     * @param {DataSliderTypes[]} dataSlider - An array of DataSliderTypes objects representing the sliders.
     * @return {void} This function does not return anything.
     */
    imageOptions.value = dataSlider.map((slider) => {
      return mergeAwsImagePath(slider.featured_hover as FeaturedTypes);
    });
  };
  const setBackgroundActive = (index: number) => {
    /**
     * Sets the background active based on the given index.
     *
     * @param {number} index - The index of the background to set as active.
     */
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
