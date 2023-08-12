import { type AxiosResponse } from "axios";
import HTTPService from "./base-service";
import { menuTypes } from "@/types/menu.types";
import { HomepageTypes } from "types/homepage.types";

class HomepageService extends HTTPService {
  getHomepageContent(): Promise<AxiosResponse<HomepageTypes>> {
    return this.get("/homepage.json");
  }
}

export default new HomepageService();
