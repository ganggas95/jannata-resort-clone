import { useUiLogic } from "./useUiLogic";

export const useSectionVisibleLogic = (element: Ref<HTMLElement | null>) => {
  /**
   * Generates a hook that handle section visibility logic.
   *
   * @param {Ref<HTMLElement | null>} element - The element reference.
   * @return {Object} An object containing the `isSectionVisible` and `scrollPosition` properties.
   */
  const { scrollPosition } = useUiLogic();

  const isSectionVisible = ref(false);

  const options = {
    root: null, // use the viewport as the root
    rootMargin: "0px",
    threshold: 0.5, // percentage of the element visible before triggering the callback
  };

  const callback = (entries: any[]) => {
    /**
     * A function callback that processes an array of entries.
     *
     * @param {any[]} entries - An array of entries to be processed.
     */
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
