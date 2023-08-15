<template>
  <div class="btn-book__now text-uppercase">
    <div class="book-now__bars">
      <div class="book-now__bar"></div>
      <div class="book-now__bar"></div>
      <div class="book-now__bar"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.btn-book__now {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  &::after {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.125rem;
    content: "Book Now";
    font-weight: 400;
    font-size: 11px;
    /*TODO: text no wrap*/
    white-space: nowrap;
  }
  .book-now__bars {
    margin-top: 20px;
    height: 9px;
    width: 35px;
    position: relative;
    .book-now__bar {
      background-color: #fff;
      height: 2px;
      width: 65px;
      position: absolute;
      transition: all 0.3s cubic-bezier(1, 0, 0.2, 1);
      &:first-child {
        width: 0;
        transform: translateY(3.5px);
        right: 0;
      }
      &:last-child {
        width: 0.75rem;
        top: 0;
        right: 6px;
        transform: translateX(-5px) translateY(0) rotate(45deg);
      }
      &:nth-child(2) {
        width: 0.75rem;
        bottom: 0;
        right: 6px;
        transform: translateX(-5px) translateY(0) rotate(-45deg);
      }
    }
  }
}

@media not all and (max-width: 767px) {
  .btn-book__now {
    height: 8.5rem;
    width: 3rem;
    &::after {
      transform: translateY(65px) rotate(-90deg) !important;
    }
  }
}
</style>
