import type { ReactNode } from "react";
import { Button as MUIButton, type ButtonProps as MUIButtonProps } from "@mui/material";

// We can omit the props that we want to override or handle differently
type BaseProps = Omit<MUIButtonProps, "variant" | "size">;

interface ButtonComponentProps extends BaseProps {
  variant?: "text" | "contained" | "outlined"
  size?: "small" | "medium" | "large"
  children: ReactNode
  component?: React.ElementType
}

function Button({ children, ...props }: ButtonComponentProps): ReactNode {
  return <MUIButton {...props}>{children}</MUIButton>;
}

export default Button;
