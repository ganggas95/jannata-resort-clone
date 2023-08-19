import { resolve } from "path";

const r = (p: string) => resolve(__dirname, p);

export const alias: Record<string, string> = {
  "@@": r("."),
  "@@/": r("./"),
  assets: r("./assets"),
  components: r("./components"),
  // ... other aliases
};
