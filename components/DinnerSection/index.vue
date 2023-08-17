<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHomepageStore } from "@/store/homepage-store";
import { CSSProperties } from "nuxt/dist/app/compat/capi";
import { useSectionVisibleLogic } from "@/composable/useSectionVisibleLogic";

const store = useHomepageStore();
const { dinnerSectionContent } = storeToRefs(store);
const sectionElement = ref<HTMLElement | null>(null);
const { isSectionVisible, scrollPosition } =
  useSectionVisibleLogic(sectionElement);

const imageStyle = computed<CSSProperties>(() => {
  if (dinnerSectionContent.value?.model?.featured) {
    return {
      backgroundImage: `url(${
        dinnerSectionContent.value?.model?.featured?.aws_file_url +
        dinnerSectionContent.value?.model?.featured?.path +
        dinnerSectionContent.value?.model?.featured?.filename
      })`,
      backgroundPosition: `25% -${scrollPosition.value.y * 0.15}px`,
      backgroundSize: "400%",
    };
  }
  return {};
});

const contentStyle = computed<CSSProperties>(() => {
  return {
    transform: `translateY(${(scrollPosition.value.y * 20) / 1000}px)`,
  };
});
</script>
<template>
  <section
    class="dinner-section"
    id="dinner-section"
    ref="sectionElement"
    v-if="dinnerSectionContent"
  >
    <div class="container">
      <div
        class="dinner-section__content"
        :class="{ 'slide-right': isSectionVisible }"
        :style="contentStyle"
      >
        <h1 :class="{ 'slide-up': isSectionVisible }">
          <span v-html="dinnerSectionContent.model.title_one"></span>
          <span v-html="dinnerSectionContent.model.title_two"></span>
        </h1>
        <p
          v-html="dinnerSectionContent.model.description"
          :class="{ 'slide-up': isSectionVisible }"
        ></p>
        <div :class="{ 'slide-up': isSectionVisible }">
          <ReadMoreBtn>
            {{ dinnerSectionContent.model.link?.title || "Read more" }}
          </ReadMoreBtn>
        </div>
      </div>
      <div
        class="dinner-section__image--wrapper"
        :class="{ 'slide-left': isSectionVisible }"
      >
        <div class="dinner-section__image" :style="imageStyle" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.dinner-section {
  height: 70vh;
  background: var(--white-color);
  position: relative;
  padding: 50px 0px;
  color: var(--primary-color);
  overflow: hidden;
  .container {
    padding-top: 20px;
    display: flex;
    flex-direction: column-reverse;
  }
  .dinner-section__content {
    width: 100%;
    max-width: 370px;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    position: absolute;
    transition: transform 0.3s ease;
    z-index: 10;
    box-sizing: border-box;
    top: 1rem;
    background-color: var(--white-color);
    box-shadow: 0 0 10px var(--overlay-color);
    padding: 3rem;
    box-sizing: border-box;
    h1 {
      font-size: 1.5rem;
      font-family: "Playfair Display", serif;
      letter-spacing: 5px;
      text-transform: uppercase;
      font-weight: 400;
      word-wrap: break-word;
      display: flex;
      flex-direction: column;

      span:nth-child(2) {
        color: var(--secondary-color);
      }
    }

    p {
      line-height: 1.25rem;
      font-family: "Open Sans", serif;
      letter-spacing: 1px;
      font-size: 12px;
    }
  }

  .dinner-section__image--wrapper {
    height: 575px;
    width: 100%;
    max-width: 450px;
    z-index: 9;
    transform: translateX(5%);
    position: relative;
    div.dinner-section__image {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
}

@media not all and (max-width: 767px) {
  .dinner-section {
    .dinner-section__content {
      position: absolute;
      width: 60%;
      left: 50%;
      top: 2rem;
      max-height: 595px;
      max-width: 470px;
      h1 {
        font-size: 32px;
      }
    }
    .dinner-section__image--wrapper {
      width: 100%;
      height: 595px;
      max-width: 800px;
      position: relative;
      transition: transform 0.3s ease-in-out;
    }
  }
}
</style>
