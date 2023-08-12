<template>
  <div
    class="loading-container-second"
    :class="{ 'loading-container--hidden': hideProgress }"
  ></div>
  <div
    class="loading-container"
    :class="{ 'loading-container--hidden': hideProgress }"
  >
    <div class="loading-content">
      <img
        class="loading-content__img"
        :src="logo"
        alt="Logo Jennata"
        loading="lazy"
      />
      <span class="loading-content__progress"
        >Loading
        <span class="loading-content__value">{{ progress }}%</span></span
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import logo from "@/assets/img/logo-jennata.png";

const props = defineProps<{ progress: number }>();
const hideProgress = ref(false);
watch(
  () => props.progress,
  (progressVal: number) => {
    const interval = setInterval(() => {
      if (progressVal >= 100) {
        hideProgress.value = true;
        clearInterval(interval);
      }
    }, 500);
  }
);
</script>
