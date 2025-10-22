import type { ReactNode } from "react";
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface GoogleMapProps {
  address: string
  width?: string | number
  height?: string | number
}

function GoogleMap({ address, width = "100%", height = 360 }: GoogleMapProps): ReactNode {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const query = encodeURIComponent(address);
  const src = `https://www.google.com/maps?q=${query}&output=embed`;

  // レスポンシブな高さを設定
  const responsiveHeight = typeof height === "number"
    ? { xs: Math.min(height * 0.7, 250), sm: Math.min(height * 0.85, 320), md: height }
    : height;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Box
      ref={mapRef}
      sx={{
        width,
        height: responsiveHeight,
        borderRadius: { xs: "8px", sm: "12px" },
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        position: "relative",
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!isVisible && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            color: "#666",
            fontSize: "14px",
            zIndex: 1,
          }}
        >
          地図を読み込み中...
        </Box>
      )}

      {isVisible && (
        // eslint-disable-next-line react-dom/no-missing-iframe-sandbox
        <iframe
          title="Google Map"
          src={src}
          width="100%"
          height="100%"
          style={{
            border: 0,
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          onLoad={handleLoad}
        />
      )}
    </Box>
  );
}

export default GoogleMap;
