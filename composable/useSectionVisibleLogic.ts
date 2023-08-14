import { CSSProperties } from "nuxt/dist/app/compat/capi";
import { useUiLogic } from "./useUiLogic";

export const useSectionVisibleLogic = (element: Ref<HTMLElement | null>) => {
  const { scrollPosition } = useUiLogic();

  const isSectionVisible = ref(false);

  const options = {
    root: null, // use the viewport as the root
    rootMargin: "0px",
    threshold: 0.5, // percentage of the element visible before triggering the callback
  };

  const callback = (entries: any[]) => {
    entries.forEach((entry) => {
      isSectionVisible.value = entry.isIntersecting;
    });
  };

  onMounted(() => {
    if (element.value) {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(element.value);
    }
  });

  return {
    isSectionVisible,
    scrollPosition,
  };
};
