import type { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function OrbitThemeProvider({ ...props }): ReactNode {
  return <ThemeProvider theme={theme} {...props} />;
}
export default OrbitThemeProvider;
