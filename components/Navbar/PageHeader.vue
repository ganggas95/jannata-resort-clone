<script setup lang="ts">
import { useNavbarStore } from "@/store/navbar-store";
import { storeToRefs } from "pinia";

const navbarStore = useNavbarStore();
const { showNavbarContent } = storeToRefs(navbarStore);

const onClick = (event: Event) => {
  navbarStore.toggleNavbarContent();
};
</script>
<template>
  <nav
    class="navbar"
    :class="{
      'navbar--hidden': showNavbarContent,
    }"
  >
    <NavbarBars @click="onClick" />
    <NavbarBrands />
    <NavbarBookBtn />
  </nav>
  <NavbarMenu
    :class="{
      show: showNavbarContent,
    }"
  />
</template>
<style lang="scss">
nav.navbar {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  background-color: #323037;
  width: 100%;
  height: 5rem;
  padding: 1rem 2rem;
  box-sizing: border-box;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  &.navbar--hidden {
    transform: translateY(-100%);
  }
}
</style>
