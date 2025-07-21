import react from "@vitejs/plugin-react";
import typecript from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react({
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
  }), typecript()],
  test: {
    environment: "jsdom",
    globals: true,
    root: "app",
  },
});
