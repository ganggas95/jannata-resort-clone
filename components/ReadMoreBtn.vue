<template>
  <button class="read-more__btn--section">
    <slot />
  </button>
</template>
<style lang="scss" scoped>
.read-more__btn--section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  outline: none;
  border: none;
  background-color: transparent;
  color: var(--secondary-color);
  font-size: 10px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 20px 0px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    transform: translateX(-100%);
    width: 100%;
    height: 2px;
    background-color: var(--secondary-color);
    transition: all 0.3s cubic-bezier(1, 0, 0.2, 1);
  }
  &:hover {
    &::after {
      transform: translateX(0%);
    }
  }
}
</style>
