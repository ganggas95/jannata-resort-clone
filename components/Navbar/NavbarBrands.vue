<script lang="ts" setup>
import logo from "@/assets/img/logo-jennata.png";
</script>
<template>
  <NuxtLink to="/" class="logo">
    <img :src="logo" alt="Jannata Resort and SPA" loading="lazy" />
  </NuxtLink>
</template>
<style lang="scss" scoped>
.logo {
  width: 4.375rem;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
