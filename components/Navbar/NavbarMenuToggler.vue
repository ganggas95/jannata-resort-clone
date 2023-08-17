<script lang="ts" setup>
import { useNavbarStore } from "@/store/navbar-store";

const navbarStore = useNavbarStore();
</script>
<template>
  <div
    class="menu-toggle navbar-action__item"
    @click="navbarStore.toggleNavbarContent"
  >
    <div class="menu-toggle__bars">
      <div class="menu-toggle__bar"></div>
      <div class="menu-toggle__bar"></div>
      <div class="menu-toggle__bar"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* Mobile first strategy */
.menu-toggle {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: var(--white-color);
  height: 6rem;
  width: 2rem;

  .menu-toggle__bars {
    position: relative;
    right: 0;
    display: flex;
    row-gap: 0.45rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;

    .menu-toggle__bar {
      overflow: hidden;
      display: block;
      width: 1.5625rem;
      height: 0.025rem;
      background-color: var(--white-color);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
  &::after {
    content: "Close";
    margin-top: 1.25rem;
    font-size: 9px;
    line-height: 1.3;
    font-weight: 400;
    transform: rotate(-90deg);
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    .menu-toggle__bars {
      .menu-toggle__bar:not(:nth-child(2)) {
        width: 0;
        transform: translateX(10px);
      }
      .menu-toggle__bar:nth-child(2) {
        width: 90%;
        transform: translateX(0px);
      }
    }
    &::after {
      transform: rotate(-90deg) translateX(0px) translateY(10px);
    }
  }
}
/* Styles for non-mobile devices */
@media not all and (max-width: 767px) {
  /* Styles for non-mobile devices */
  /* Add your styles here */
  .menu-toggle {
    background-color: var(--white-color);
    color: var(--black-color);
    height: 5rem;
    width: 3rem;
    .menu-toggle__bar {
      background-color: var(--black-color) !important;
    }
    &::after {
      content: "Menu" !important;
    }
  }
}
</style>
