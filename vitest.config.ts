import react from "@vitejs/plugin-react";
import { defineConfig as defineViteConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig as defineVitestConfig, mergeConfig } from "vitest/config";

const viteConfig = defineViteConfig({
  plugins: [
    tsconfigPaths(),
    react({
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
});

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
});

export default mergeConfig(viteConfig, vitestConfig);
