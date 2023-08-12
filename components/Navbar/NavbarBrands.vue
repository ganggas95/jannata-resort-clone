<script lang="ts" setup>
import { useNavbarStore } from "@/store/navbar-store";
import logo from "@/assets/img/logo-jennata.png";
const navbarStore = useNavbarStore();
</script>
<template>
  <NuxtLink
    to="/"
    class="logo"
  >
    <img :src="logo" alt="Jannata Resort and SPA" loading="lazy" />
  </NuxtLink>
</template>
<style lang="scss" scoped>
.logo {
  width: 4.375rem;
  height: 100%;
  user-select: none;
  transition: opacity .3s ease-in-out;
  img {
    width: 100%;
    height: 100%;
  }
  @media not all and (max-width: 767px) {
    width: 7.5rem;
    height: auto;
  }
}
</style>
