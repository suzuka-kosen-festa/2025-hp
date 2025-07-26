import type { Decorator, Preview } from "@storybook/react-vite";

import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import React from "react";
import { withScreenshot } from "storycap";

/* TODO: update import for your custom Material UI themes */
// import { lightTheme, darkTheme } from '../path/to/themes';

const NotoSansJPFont
  = "@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    screenshot: {
      fullPage: true,
      captureBeyondViewport: false,
      delay: 100,
      viewports: {
        desktop: { width: 1920, height: 1080 },
        tablet: { width: 768, height: 1024 },
        mobile: { width: 360, height: 800, isMobile: true, hasTouch: true },
      },
    },
  },

  decorators: [withThemeFromJSXProvider({
    GlobalStyles: (
      <>
        <GlobalStyles
          styles={`
        ${NotoSansJPFont}
        body {
          font-family: 'Noto Sans JP', 'sans-serif';
        }
      `}
        />
        <CssBaseline />
      </>),
    Provider: ThemeProvider,
    themes: {
      // Provide your custom themes here
      light: lightTheme,
      // dark: darkTheme,
    },
    defaultTheme: "light",
  }), withScreenshot as Decorator],
};

export default preview;
