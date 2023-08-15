<template>
  <span class="icon-dots">
    <i />
    <i />
    <i />
    <i />
    <i />
    <i />
    <i />
    <i />
    <i />
  </span>
</template>
<style lang="scss" scoped>
span.icon-dots {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 4px;
  cursor: pointer;
  i {
    border-radius: 50%;
    height: 5px;
    width: 5px;
    background-color: #fff;
  }
}
</style>
