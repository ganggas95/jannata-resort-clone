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
          <ReadMoreBtn :class="{ 'slide-up': isSectionVisible }"
            >{{ relaxingSectionContent?.model.link?.title || "Read more" }}
          </ReadMoreBtn>
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
    background-color: var(--overlay-color);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .relaxing-section__content {
    max-width: 350px;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    justify-content: flex-start;
    color: var(--white-color);
    h1 {
      font-size: 35px;
      font-weight: 400;
      letter-spacing: 2px;
      line-height: 30px;
      font-family: "Playfair Display", serif;
    }
    p {
      line-height: 1.25rem;
      font-size: 12px;
      font-family: "Open Sans", serif;
      letter-spacing: 1px;
      margin-top: 2rem;
    }
    .read-more__btn--section {
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
}

@media not all and (max-width: 767px) {
  .relaxing-section {
    .relaxing-section__wrapper {
      justify-content: center;
    }
  }
  .relaxing-section__content {
    margin-right: 4rem;
  }
}
</style>
