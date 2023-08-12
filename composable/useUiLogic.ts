import { useScroll, useWindowSize } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { uiStore } from "@/store/ui-store";

export const useUiLogic = () => {
  const { width } = useWindowSize();
  const scrollElement = ref<HTMLElement | null>(null);
  const { y, x } = useScroll(scrollElement);
  const isMobile = computed(() => width.value <= 767);
  const store = uiStore();
  const { scrollPosition } = storeToRefs(store);
  watch(
    () => ({ y: y.value, x: x.value }),
    (value) => store.setScrollPosition(value)
  );
  return {
    isMobile,
    scrollElement,
    scrollPosition,
  };
};
