import type { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    text: {
      primary: "#000000",
      secondary: "#0F0F0F",
    },
    background: {
      default: "#fafafa",
      paper: "#fafafa",
    },
  },
});

function OrbitThemeProvider({ ...props }): ReactNode {
  return <ThemeProvider theme={theme} {...props} />;
}
export default OrbitThemeProvider;
