import type { ReactNode } from "react";
import { Button as MUIButton } from "@mui/material";
import { ja } from "@/locales/ja";

interface ButtonComponentProps {
}

function Button(_: ButtonComponentProps): ReactNode {
  return (
    <MUIButton color="primary" variant="contained">
      {ja.dummy}
    </MUIButton>
  );
}
export default Button;
