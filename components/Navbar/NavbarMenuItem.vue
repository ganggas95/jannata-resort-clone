<script setup lang="ts">
const emit = defineEmits(["onHover"]);
const props = defineProps<{ menu: any; subMenu?: any[]; index: number }>();
const hasSubMenu = computed(() => props.subMenu?.length || 0 > 0);
const handleHover = (index: number | null, isSubMenu?: boolean) => {
  if (!hasSubMenu.value || isSubMenu) {
    emit("onHover", index);
  } else {
    emit("onHover", null);
  }
};
</script>
<template>
  <li
    class="menu-item"
    :class="{
      'sub-menu': hasSubMenu,
    }"
    @mouseenter="handleHover(props.index)"
    @mouseleave="handleHover(null)"
  >
    {{ menu.name }}
  </li>
  <li
    class="menu-item"
    v-for="(sub, index) in subMenu"
    :key="index"
    @mouseover="handleHover(index + props.index, true)"
    @mouseleave="handleHover(null, true)"
  >
    {{ sub.name }}
  </li>
</template>
