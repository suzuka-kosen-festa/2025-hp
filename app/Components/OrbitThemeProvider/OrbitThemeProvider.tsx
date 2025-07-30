import type { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
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
