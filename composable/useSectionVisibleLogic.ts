import { CSSProperties } from "nuxt/dist/app/compat/capi";
import { useUiLogic } from "./useUiLogic";

export const useSectionVisibleLogic = (sectionId: string) => {
  const { scrollPosition } = useUiLogic();

  const isSectionVisible = ref(false);

  const handleScroll = (yPosition: number) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();

      // Check if the section is in the viewport
      if (rect.top <= yPosition && rect.bottom >= yPosition) {
        isSectionVisible.value = true;
      } else {
        isSectionVisible.value = false;
      }
    }
  };

  watch(
    () => scrollPosition.value.y,
    (value) => {
      handleScroll(value);
    }
  );

  const contentStyle = computed<CSSProperties>(() => {
    return {
      transform: `translateY(-${scrollPosition.value.y * 0.01}px)`,
    };
  });
  return {
    contentStyle,
    isSectionVisible,
  };
};
