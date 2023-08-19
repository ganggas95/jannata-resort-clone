import axios, { type AxiosResponse } from "axios";
import HTTPService from "./base-service";
import { TemperatureTypes } from "types/temperature.types";

class TemperatureService extends HTTPService {
  getTemperature(): Promise<AxiosResponse<TemperatureTypes>> {
    /**
     * Retrieves the temperature from the weather API.
     *
     * @return {Promise<AxiosResponse<TemperatureTypes>>} The temperature response.
     */
    const runtimeConfig = useRuntimeConfig();
    return axios.get(runtimeConfig.public.WEATHER_API_KEY as string);
  }
}

export default new TemperatureService();
