import type { ReactNode } from "react";
import { Box } from "@mui/material";

interface GoogleMapProps {
  address: string
  width?: string | number
  height?: string | number
}

function GoogleMap({ address, width = "100%", height = 360 }: GoogleMapProps): ReactNode {
  const query = encodeURIComponent(address);
  const src = `https://www.google.com/maps?q=${query}&output=embed`;

  // レスポンシブな高さを設定
  const responsiveHeight = typeof height === "number"
    ? { xs: Math.min(height * 0.7, 250), sm: Math.min(height * 0.85, 320), md: height }
    : height;

  return (
    <Box sx={{
      width,
      height: responsiveHeight,
      borderRadius: { xs: "8px", sm: "12px" },
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    }}
    >
      <iframe
        title="Google Map"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </Box>
  );
}

export default GoogleMap;
