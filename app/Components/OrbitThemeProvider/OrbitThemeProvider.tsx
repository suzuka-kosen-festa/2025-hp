import type { ReactNode } from "react";
import { type Theme, ThemeProvider } from "@mui/material";

type Props = {
  theme: Theme;
  children: ReactNode;
};

function OrbitThemeProvider({ theme, children }: Props): ReactNode {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
export default OrbitThemeProvider;
