import { defineStore } from "pinia";
import homepageService from "@/services/homepage-service";
import { ComponentTypes } from "@/types/homepage.types";

export const useHomepageStore = defineStore("homepageStore", () => {
  const components = ref<ComponentTypes[]>([]);

  const heroSectionContent = computed<ComponentTypes | null>(() => {
    return components.value.length > 0 ? components.value[0] : null;
  });
  const resortSectionContent = computed<ComponentTypes | null>(() => {
    return components.value.length > 0 ? components.value[1] : null;
  });
  const staySectionContent = computed<ComponentTypes | null>(() => {
    return components.value.length > 0 ? components.value[2] : null;
  });
  const dinnerSectionContent = computed<ComponentTypes | null>(() => {
    return components.value.length > 0 ? components.value[3] : null;
  });

  const fetchHomepageContent = async () => {
    try {
      const { data: response } = await homepageService.getHomepageContent();
      components.value = response.components;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    components,
    heroSectionContent,
    resortSectionContent,
    staySectionContent,
    fetchHomepageContent,
    dinnerSectionContent,
  };
});
