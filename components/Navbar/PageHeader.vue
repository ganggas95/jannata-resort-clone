<script setup lang="ts">
import { useNavbarStore } from "@/store/navbar-store";
import { storeToRefs } from "pinia";
import { useUiLogic } from "@/composable/useUiLogic";
const { isMobile } = useUiLogic();
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
      'navbar--desktop': !isMobile,
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
  <div
    class="navbar-action"
    :class="{
      'navbar-action__hidden': !showNavbarContent,
    }"
  >
    <NavbarMenuToggler />
    <NavbarBookActionBtn
      class="navbar-action__item"
      style="background: #5f5c68"
    />
  </div>
</template>
<style lang="scss">
nav.navbar {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  background-color: var(--gray-dark-color); ;
  width: 100%;
  height: 5rem;
  padding: 1rem 2rem;
  box-sizing: border-box;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  &.navbar--desktop {
    visibility: hidden;
  }
}

.navbar-action {
  position: absolute;
  top: 20%;
  z-index: 12;
  right: 1.15rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: transform 0.3s ease-in-out;
  &__hidden {
    transform: translateX(100%);
    right: 0;
    left: auto;
  }
  .navbar-action__item {
    opacity: 1;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    &.btn-book__now {
      opacity: 0;
    }
  }
}

@media not all and (max-width: 767px) {
  nav.navbar {
    background-color: transparent;
    height: fit-content;
    justify-content: center;
    margin-top: 5rem;
  }
  .navbar-action {
    right: 0;
    top: 30%;
    &__hidden {
      transform: translateX(0);
      right: 0;
      left: auto;
    }

    .navbar-action__item {
      padding: 0.75rem 0.75rem 2rem;
      &:first-child {
        box-shadow: -5px -5px 10px rgb(0 0 0 / 10%);
      }
      &.btn-book__now {
        opacity: 1;
        box-shadow: -5px 5px 10px rgb(0 0 0 / 25%);
      }
      &:hover {
        width: 3.8rem;
        &.btn-book__now {
          background-color: var(--secondary-color) !important;
          .book-now__bar {
            &:first-child {
              width: 2rem;
              right: 3px;
              transform: translateX(-8px) translateY(3.5px);
            }
            &:last-child {
              right: 3px;
            }
            &:nth-child(2) {
              right: 3px;
            }
          }
        }
      }
    }
  }
}
</style>
