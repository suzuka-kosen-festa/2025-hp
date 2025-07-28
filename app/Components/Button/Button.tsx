import type { ReactNode } from "react";
import { Button as MUIButton } from "@mui/material";
import OrbitThemeProvider from "@/Components/OrbitThemeProvider/OrbitThemeProvider";
import { ja } from "@/locales/ja";

interface ButtonComponentProps {
}

function Button(_: ButtonComponentProps): ReactNode {
  return (
    <OrbitThemeProvider>
      <MUIButton color="primary" variant="contained">
        {ja.dummy}
      </MUIButton>
    </OrbitThemeProvider>
  );
}
export default Button;
