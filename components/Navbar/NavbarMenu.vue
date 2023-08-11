<script setup lang="ts">
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
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .navbar-screen__item.active {
    opacity: 1;
  }

  .navbar-menu {
    width: 100%;
    padding: 0rem 1.25rem;
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
        transition: all 0.3s;
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
}
</style>
