import type { ReactNode } from "react";

interface LinkProps {
  to: string
  children: ReactNode
  className?: string
  [key: string]: any
}

export function Link({ to, children, ...props }: LinkProps): ReactNode {
  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
}
