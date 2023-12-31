<script setup lang="ts">
import { useHomepageStore } from "@/store/homepage-store";
import { CSSProperties } from "nuxt/dist/app/compat/capi";
import { storeToRefs } from "pinia";
import { useSectionVisibleLogic } from "@/composable/useSectionVisibleLogic";
const sectionElement = ref<HTMLElement | null>(null);
const homepageStore = useHomepageStore();
const { resortSectionContent } = storeToRefs(homepageStore);
const { isSectionVisible, scrollPosition } =
  useSectionVisibleLogic(sectionElement);

const imageStyle = computed<CSSProperties>(() => {
  if (resortSectionContent.value?.model?.featured) {
    return {
      backgroundImage: `url(${
        resortSectionContent.value?.model?.featured?.aws_file_url +
        resortSectionContent.value?.model?.featured?.path +
        resortSectionContent.value?.model?.featured?.filename
      })`,
      backgroundPosition: `50% -${scrollPosition.value.y * 0.05}px`,
    };
  }
  return {};
});

const contentStyle = computed<CSSProperties>(() => {
  return {
    transform: `translateY(-${scrollPosition.value.y * 0.01}px)`,
  };
});
</script>
<template>
  <section
    class="resort-section"
    id="resort-section"
    ref="sectionElement"
    v-if="resortSectionContent"
  >
    <div class="container">
      <div
        class="resort-section__content"
        :class="{ 'slide-right': isSectionVisible }"
      >
        <h1
          v-html="resortSectionContent.model.title"
          :class="{ 'slide-up': isSectionVisible }"
          :style="contentStyle"
        ></h1>
        <p
          v-html="resortSectionContent.model.description"
          :class="{ 'slide-up': isSectionVisible }"
          :style="contentStyle"
        ></p>
        <div :class="{ 'slide-up': isSectionVisible }" :style="contentStyle">
          <ReadMoreBtn :class="{ 'slide-up': isSectionVisible }"
            >{{ resortSectionContent.model.link?.title || "Read more" }}Ï
          </ReadMoreBtn>
        </div>
      </div>
      <div
        class="resort-section__image--wrapper"
        :class="{ 'slide-left': isSectionVisible }"
      >
        <div class="resort-section__image" :style="imageStyle" />
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.resort-section {
  height: fit-content;
  background: var(--white-color);
  position: relative;
  padding: 50px 0px;
  .container {
    padding-top: 100px;
  }
  .resort-section__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    position: relative;
    transition: transform 0.3s ease-in-out;
    h1 {
      font-size: 1.5rem;
      font-family: "Playfair Display", serif;
      letter-spacing: 5px;
      margin-bottom: 20px;
      text-transform: uppercase;
      font-weight: 400;
      word-wrap: break-word;
    }

    p {
      line-height: 1.25rem;
      font-family: "Open Sans", serif;
      letter-spacing: 1px;
    }
  }

  .resort-section__image--wrapper {
    height: 275px;
    width: 100%;
    margin-top: 2rem;
    div.resort-section__image {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }

  &::before {
    content: "";
    height: 100%;
    width: 20rem;
    background-repeat: no-repeat;
    background-size: contain;
    top: -20%;
    position: absolute;
    left: 0;
    background-image: url("/sections/resort/bg-left.png");
  }
}

@media not all and (max-width: 767px) {
  .resort-section {
    height: 80vh;
    .resort-section__content {
      background-color: var(--gray-light-color);
      position: absolute;
      max-width: 60%;
      right: 10%;
      top: 13rem;
      z-index: 10;
      height: 425px;
      padding: 5rem 3rem 2rem 20%;
      box-sizing: border-box;
    }
    .resort-section__image--wrapper {
      z-index: 11;
      width: 40%;
      height: 450px;
      max-width: 800px;
      left: 5%;
      position: absolute;
      transition: transform 0.3s ease-in-out;
    }
  }
}
</style>
