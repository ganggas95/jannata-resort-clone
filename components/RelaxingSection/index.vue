<script setup lang="ts">
import { useHomepageStore } from "@/store/homepage-store";
import { useSectionVisibleLogic } from "@/composable/useSectionVisibleLogic";
import { CSSProperties } from "nuxt/dist/app/compat/capi";
import { storeToRefs } from "pinia";
const sectionElement = ref<HTMLElement | null>(null);
const store = useHomepageStore();
const { relaxingSectionContent } = storeToRefs(store);

const { isSectionVisible, scrollPosition } =
  useSectionVisibleLogic(sectionElement);

const sectionStyle = computed<CSSProperties>(() => {
  if (!relaxingSectionContent.value?.model.featured) return {};
  return {
    backgroundImage: `url(${mergeAwsImagePath(
      relaxingSectionContent.value?.model.featured
    )})`,
  };
});
</script>
<template>
  <section
    class="relaxing-section"
    id="relaxing-section"
    ref="sectionElement"
    :style="sectionStyle"
  >
    <div class="relaxing-section__wrapper">
      <div class="relaxing-section__content">
        <h1 :class="{ 'slide-up': isSectionVisible }">
          {{ relaxingSectionContent?.model.title }}
        </h1>
        <p :class="{ 'slide-up': isSectionVisible }">
          {{ relaxingSectionContent?.model.description }}
        </p>
        <div>
          <button
            class="read-more__btn--section"
            :class="{ 'slide-up': isSectionVisible }"
          >
            {{ relaxingSectionContent?.model.link?.title || "Read more" }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.relaxing-section {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  .relaxing-section__wrapper {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .relaxing-section__content {
    max-width: 350px;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    margin-right: 4rem;
    justify-content: flex-start;
    h1 {
      color: #fff;
      font-size: 35px;
      font-weight: 400;
      letter-spacing: 2px;
      line-height: 30px;
      font-family: "Playfair Display", serif;
    }
    p {
      color: #fff;
      line-height: 1.25rem;
      font-size: 12px;
      font-family: "Open Sans", serif;
      letter-spacing: 1px;
      margin-top: 2rem;
    }
    .read-more__btn--section {
      color: #fff;

      &:hover {
        color: #679334;
      }
    }
  }
  @media not all and (max-width: 767px) {
    .relaxing-section__wrapper {
      justify-content: center;
    }
  }
}
</style>
