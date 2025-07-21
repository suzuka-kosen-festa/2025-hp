import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  process.env = { ...process.env, ...env };
  return {
    plugins: [
      cloudflare({ viteEnvironment: { name: "ssr" } }),
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: [
            [
              '@emotion/babel-plugin',
              {
                importMap: {
                  '@mui/system': {
                    styled: {
                      canonicalImport: ['@emotion/styled', 'default'],
                      styledBaseImport: ['@mui/system', 'styled']
                    }
                  },
                  '@mui/material/styles': {
                    styled: {
                      canonicalImport: ['@emotion/styled', 'default'],
                      styledBaseImport: ['@mui/material/styles', 'styled']
                    }
                  },
                  '@mui/material': {
                    styled: {
                      canonicalImport: ['@emotion/styled', 'default'],
                      styledBaseImport: ['@mui/material', 'styled']
                    }
                  }
                }
              }
            ]
          ]
        }
      }),
      reactRouter(),
      tsconfigPaths(),
    ],
  };
});
