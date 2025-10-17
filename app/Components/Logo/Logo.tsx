import type { ReactNode } from "react";
import { Box } from "@mui/material";

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

  // レスポンシブなサイズを計算
  const responsiveLength = typeof length === "number"
    ? { xs: Math.min(length * 0.6, 300), sm: Math.min(length * 0.8, 400), md: length }
    : length;

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        width: responsiveLength,
        height: responsiveLength,
        backgroundColor: withBlackBackground ? "#000000" : "transparent",
        borderRadius: "8px",
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
    </Box>
  );
}

export default Logo;
