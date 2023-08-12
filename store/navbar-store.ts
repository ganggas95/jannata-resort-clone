import { defineStore } from "pinia";
export const useNavbarStore = defineStore("navbarStore", () => {
  const showNavbarContent = ref(false);
  const toggleNavbarContent = () => {
    showNavbarContent.value = !showNavbarContent.value;
  };
  return {
    showNavbarContent,
    toggleNavbarContent,
  };
});
