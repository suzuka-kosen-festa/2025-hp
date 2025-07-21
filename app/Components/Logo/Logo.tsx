import type { ReactNode } from "react";

interface LogoProps {
  length?: string | number
  simpleLogo?: boolean
  withBlackBackground?: boolean
  withStars?: boolean
}

function Logo({
  length = 500,
  simpleLogo = false,
  withBlackBackground = false,
  withStars = false,
}: LogoProps): ReactNode {
  const logoSrc = simpleLogo ? "/simple-logo.svg" : "/logo.svg";

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        width: length,
        height: length,
        backgroundColor: withBlackBackground ? "#000000" : "transparent",
      }}
    >
      <img
        src={logoSrc}
        alt="Logo"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          zIndex: 2,
        }}
      />
      {withStars && (
        <img
          src="/stars.svg"
          alt="Stars background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
      )}
    </div>
  );
}

export default Logo;
