// vitest.config.ts
/// <reference types="vitest" />
import { defineVitestConfig } from "nuxt-vitest/config";

import { alias } from "./aliases";

export default defineVitestConfig({
  resolve: { ...alias },
  // ... further settings
});
