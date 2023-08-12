<script setup lang="ts">
import { useNavbarStore } from "@/store/navbar-store";
import { storeToRefs } from "pinia";

const navbarStore = useNavbarStore();
const { menus } = storeToRefs(navbarStore);

const hoveredItem = ref<number | null>(null);
const menuImages = computed(() => {
  return menus.value.flatMap((menu) => {
    if (menu.items) {
      return menu.items.map((d) => d.filename);
    }
    return menu.filename;
  });
});

const onHover = (index: number) => {
  hoveredItem.value = index;
};

onMounted(() => {
  navbarStore.getMenu();
});
</script>
<template>
  <div class="navbar-content">
    <ul class="navbar-language">
      <li class="active">EN</li>
      <li>FR</li>
      <li>RU</li>
      <li>JP</li>
      <li>DE</li>
    </ul>
    <div class="navbar-screens">
      <div
        class="navbar-screen__item"
        :class="{
          'navbar-screen__item active': index === hoveredItem,
        }"
        v-for="(img, index) in menuImages"
        :key="`${index}-menu-image`"
        :style="{
          backgroundImage: `url(${img})`,
        }"
      ></div>
    </div>
    <div class="navbar-menu">
      <ul>
        <NavbarMenuItem
          v-for="(menu, index) in menus"
          :key="index"
          :menu="menu"
          :sub-menu="menu.items"
          @onHover="onHover"
          :index="index"
        />
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.navbar-content {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #323037;

  transform: translateX(100%);
  transition: transform 1s ease-in-out;
  z-index: 12;

  &.show {
    transform: translateX(0);
    * > li {
      transform: translateY(0px) !important;
    }
  }

  .navbar-language {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 8px;
    padding: 0px 20px;
    font-size: 12px;
    color: #fff;
    font-weight: 400;
    .active {
      color: #679334;
    }
  }

  .navbar-screens {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 60%;
    width: 70%;
    background-color: #0000001a;
    transform: translateX(-50%) translateY(-50%);
    max-height: 500px;
  }

  .navbar-screen__item {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    background: no-repeat 50%;
    background-size: cover;
    transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .navbar-screen__item.active {
    opacity: 1;
  }

  .navbar-menu {
    width: 100%;
    padding: 0rem 1.25rem;
    position: relative;
    ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      box-sizing: border-box;
      padding-left: 1.25rem;
      max-height: 550px;
      li {
        list-style: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 2.5;
        color: #d8d6e2;
        cursor: pointer;
        width: 100%;
        position: relative;
        transition: transform 1s ease-in-out;
        transform: translateY(100%);
        overflow: hidden;
        &.sub-menu {
          color: #d8d6e2;
          opacity: 0.3;
          font-weight: 400;
          letter-spacing: 2px;
          cursor: default;
        }
        &::before {
          content: "";
          width: 0;
          background-color: #679334;
          height: 2px;
          transition: all 0.3s;
          position: absolute;
          top: 50%;
          z-index: -1;
        }
        &:not(.sub-menu):hover {
          &::before {
            width: 85%;
            left: -10px;
          }
          transform: translateX(10px);
        }
      }
    }
  }
  @media not all and (max-width: 767px) {
    width: 80%;
    transform: translateX(200%);
    right: 0;
    left: auto;
    &.show {
      transform: translateX(0);
      right: 0;
      left: auto;
    }

    .navbar-language {
      right: auto !important;
      left: 10% !important;
    }
    .navbar-menu {
      padding: 0rem 10%;
      ul {
        display: grid;
        grid-template-rows: repeat(8, 1fr); /* Three equal-height rows */
        grid-template-columns: repeat(2, 1fr); /* Two equal-width columns */
        grid-auto-flow: column;
        grid-gap: 10px;
        li {
          font-size: 1.25rem;
          font-weight: 400;
        }
      }
    }
    .navbar-screens {
      max-height: 600px;
    }
  }
}
</style>
