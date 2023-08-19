import { CSSProperties } from "nuxt/dist/app/compat/capi";
import { timeNumberToString } from "~/utils/time-utils";

export const useTimeLogic = () => {
  /**
   * Custom hook that provides time-related logic.
   * The hook returns the hour and minute as strings with leading zeros,
   * and a CSSProperties object for controlling the opacity of an element.
   *
   * @returns {Object} An object containing the hourString, minuteString, and dotStyles.
   */
  const hourRef = ref(0);
  const minuteRef = ref(0);
  const interval = ref<NodeJS.Timeout | null>(null);
  const timeHitter = ref(false);

  const hourString = computed(() => {
    return timeNumberToString(hourRef.value);
  });
  const minuteString = computed(() => {
    return timeNumberToString(minuteRef.value);
  });

  const amPMValue = computed(() => {
    return hourRef.value < 12 ? "AM" : "PM";
  });

  const dotStyles = computed<CSSProperties>(() => {
    return {
      opacity: timeHitter.value ? 1 : 0,
    };
  });
  /**
   * Starts the interval to update the hour and minute values every second.
   * The timeHitter value is toggled every second to control the opacity of an element.
   */
  onMounted(() => {
    interval.value = setInterval(() => {
      const date = new Date();
      hourRef.value = date.getHours();
      minuteRef.value = date.getMinutes();
      timeHitter.value = !timeHitter.value;
    }, 1000);
  });
  /**
   * Clears the interval when the component is unmounted.
   */
  onUnmounted(() => {
    if (interval.value) clearInterval(interval.value);
  });

  return {
    hourRef,
    minuteRef,
    hourString,
    minuteString,
    dotStyles,
    amPMValue,
    timeHitter,
  };
};
