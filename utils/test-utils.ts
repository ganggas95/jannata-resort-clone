import { createApp } from "vue";

export const withSetup = <T extends () => any>(
  hook: T
): [ReturnType<T>, ReturnType<typeof createApp>] => {
  /**
   * Wraps a setup function with Vue's createApp and mounts it to a div element.
   *
   * @param hook - The setup function to be executed.
   * @returns An array containing the result of the setup function and the created app instance.
   */
  let result: ReturnType<T> | undefined = undefined;

  const app = createApp({
    setup() {
      result = hook();
      return () => {};
    },
  });

  app.mount(document.createElement("div"));

  return [result!, app];
};
