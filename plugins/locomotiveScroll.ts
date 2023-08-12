import LocomotiveScroll from "locomotive-scroll";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", (app) => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("main") as HTMLElement,
      smooth: true,
      getDirection: true,
    });
    app.provide("scroll", scroll);
  });
});
