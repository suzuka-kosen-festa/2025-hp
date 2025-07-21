import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// eslint-disable-next-line node/prefer-global/process
const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: [
          [
            "@emotion/babel-plugin",
            {
              importMap: {
                "@mui/system": {
                  styled: {
                    canonicalImport: ["@emotion/styled", "default"],
                    styledBaseImport: ["@mui/system", "styled"],
                  },
                },
                "@mui/material/styles": {
                  styled: {
                    canonicalImport: ["@emotion/styled", "default"],
                    styledBaseImport: ["@mui/material/styles", "styled"],
                  },
                },
                "@mui/material": {
                  styled: {
                    canonicalImport: ["@emotion/styled", "default"],
                    styledBaseImport: ["@mui/material", "styled"],
                  },
                },
              },
            },
          ],
        ],
      },
    }),
    !isStorybook && reactRouter(),
    tsconfigPaths(),
  ],
});
