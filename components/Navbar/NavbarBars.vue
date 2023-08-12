<template>
  <div class="navbar-btn__bars">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<style lang="scss" scoped>
div.navbar-btn__bars {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 2rem;
  row-gap: 0.45rem;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0px;
  cursor: pointer;
  > div {
    width: 1.5625rem;
    height: 0.025rem;
    background-color: #f0f0f0;
  }

  @media not all and (max-width: 767px) {
    display: none;
  }
}
</style>
