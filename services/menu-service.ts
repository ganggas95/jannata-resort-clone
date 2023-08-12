import { type AxiosResponse } from "axios";
import HTTPService from "./base-service";
import { menuTypes } from "@/types/menu.types";

class MenuService extends HTTPService {
  getMenu(): Promise<AxiosResponse<menuTypes[]>> {
    return this.get("/menu.json");
  }
}

export default new MenuService();
