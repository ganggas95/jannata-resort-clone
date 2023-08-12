import { defineStore } from "pinia";
import menuService from "@/services/menu-service";
import { menuTypes } from "@/types/menu.types";
export const useNavbarStore = defineStore("navbarStore", () => {
  const showNavbarContent = ref(false);
  const menus = ref<menuTypes[]>([]);
  const toggleNavbarContent = () => {
    showNavbarContent.value = !showNavbarContent.value;
  };

  const getMenu = async () => {
    try {
      const { data: response } = await menuService.getMenu();
      menus.value = response;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    showNavbarContent,
    menus,
    toggleNavbarContent,
    getMenu,
  };
});
