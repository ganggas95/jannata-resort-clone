<template>
  <div>
    <LoadingIndicators :progress="progress" />
    <NavbarPageHeader v-if="progress >= 100" />
    <slot/>
  </div>
</template>
<script setup lang="ts">
const progress = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    progress.value += 5;
    if (progress.value === 100) {
      clearInterval(interval);
    }
  }, 100);
});
</script>
