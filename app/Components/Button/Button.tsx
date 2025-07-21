import type { ReactNode } from "react";
import { Button as MUIButton } from "@mui/material";

interface ButtonComponentProps {
}

function Button(_: ButtonComponentProps): ReactNode {
  return (
    <MUIButton>Hoge Fuga Piyo</MUIButton>
  );
}
export default Button;
