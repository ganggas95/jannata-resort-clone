import { useScroll, useWindowSize } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { uiStore } from "@/store/ui-store";

export const useUiLogic = () => {
  /**
   * Generates a hook that handles UI logic.
   *
   * @return {Object} An object containing the following properties:
   *   - isMobile: A reactive boolean indicating if the current device is mobile.
   *   - scrollElement: A ref to the scrollable element.
   *   - scrollPosition: A reactive object containing the current scroll position.
   */
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
