import emotion from "@emotion/babel-plugin";
import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/cloudflare" {
  interface Future {
    v3_singleFetch: true
  }
}

export default defineConfig({
  plugins: [
    remixCloudflareDevProxy(),
    tsconfigPaths(),
    react({
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
  },
});
