import temperatureService from "@/services/temperature-service";
import { TemperatureTypes } from "@/types/temperature.types";

export const useTemperatureLogic = () => {
  /**
   * Custom hook for handling temperature logic
   * @returns an object with the temperature data
   */
  const temperature = ref<TemperatureTypes | null>(null);
  const interval = ref<NodeJS.Timeout | null>();
  /**
   * Fetches the temperature data from the server
   */
  const getTemperature = async () => {
    /**
     * Retrieves the temperature data from the temperature service and updates the value of the temperature.
     *
     * @return {type} description of return value
     */
    try {
      const response = await temperatureService.getTemperature();
      temperature.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };
  // Run the getTemperature function on component mount
  onMounted(() => {
    // Start the interval to fetch temperature data every hour
    getTemperature();
    interval.value = setInterval(() => {
      getTemperature();
    }, 1000 * (60 * 60));
  });

  // Stop the interval when the component unmounts
  onUnmounted(() => {
    if (interval.value) clearInterval(interval.value);
  });
  // Return the temperature data
  return {
    temperature,
  };
};
