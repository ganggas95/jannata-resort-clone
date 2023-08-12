import {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.NUXT_API_URL,
  timeout: 10000,
  responseType: "json",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
class HTTPService {
  private http: AxiosInstance;
  constructor() {
    this.http = axiosInstance;
  }
  abortController = new AbortController();

  getAbortController(): AbortController {
    return this.abortController;
  }

  cancelRequest() {
    this.abortController.abort();
  }
  get<AxiosResponse>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.http.get(url, {
      ...config,
      signal: this.abortController.signal,
    });
  }
}

export default HTTPService;
