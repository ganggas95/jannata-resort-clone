<script setup lang="ts">
import { useHomepageStore } from "@/store/homepage-store";
import TestimonialSliderItem from "./TestimonialSliderItem.vue";
import { storeToRefs } from "pinia";
const store = useHomepageStore();
const { testimonialSectionContent } = storeToRefs(store);
</script>
<template>
  <section class="testimonial-section" id="testimonial-section">
    <div class="container">
      <Carousel v-if="testimonialSectionContent">
        <Slide
          v-for="(item, index) in testimonialSectionContent.model.dataSlider"
          :key="index"
        >
          <TestimonialSliderItem :item="item" />
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.testimonial-section {
  height: 65vh;
  background-color: #fff;
  padding: 10rem 0rem;
  box-sizing: border-box;
  .container {
    box-sizing: border-box;
    section.carousel {
      width: 100%;
      .carousel__pagination {
        margin-top: 2rem;
      }
    }
  }
}
@media not all and (max-width: 767px) {
  section.carousel {
    max-width: 450px;
  }
  .container {
    display: flex;
    justify-content: center;
  }
}
</style>
