<script setup lang="ts">
import { useNavbarStore } from "@/store/navbar-store";

const menus = ref([
  {
    name: "Homepage",
    filename: "/menu/homepage.jpeg",
  },
  {
    name: "Our Story",
    filename: "/menu/OurStory.jpeg",
  },
  {
    name: "Exclusive deals",
    filename: "/menu/exclusive-deals.jpeg",
  },
  {
    name: "SPA & Yoga",
    filename: "/menu/Spa.jpeg",
  },
  {
    name: "Amateras Dining",
    filename: "/menu/amateras.jpeg",
  },
  {
    name: "Wedding",
    filename: "/menu/wedding.jpeg",
  },
  {
    name: "Ubud & Beyond",
    filename: "/menu/ubud.jpeg",
  },
  {
    name: "Location & Contact",
    filename: "/menu/location.jpeg",
  },
  {
    name: "Accommodations",
    items: [
      {
        name: "Pool Villa",
        filename: "/menu/pool.jpeg",
      },
      {
        name: "Deluxe Suite",
        filename: "/menu/deluxe.jpeg",
      },
      {
        name: "Superior Room",
        filename: "/menu/superior.jpeg",
      },
      {
        name: "Two Bedroom Pool Villa",
        filename: "/menu/bedroom.jpeg",
      },
    ],
  },
]);
const navbarStore = useNavbarStore();

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
      <div class="menu-toggle" @click="navbarStore.toggleNavbarContent">
        <div class="menu-toggle__bars">
          <div class="menu-toggle__bar"></div>
          <div class="menu-toggle__bar"></div>
          <div class="menu-toggle__bar"></div>
        </div>
        <span class="menu-toggle__text">Close</span>
      </div>
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
  transition: transform 0.3s ease-in-out;

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
    .menu-toggle {
      position: absolute;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      z-index: 12;
      top: -5.5rem;
      right: 1.15rem;
      cursor: pointer;
      color: #fff;
      height: 6rem;
      width: 2rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      .menu-toggle__bars {
        position: relative;
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
          background-color: #fff;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      }
      .menu-toggle__text {
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
        .menu-toggle__text {
          transform: rotate(-90deg) translateX(0px) translateY(10px);
        }
      }
    }
  }
}
</style>
