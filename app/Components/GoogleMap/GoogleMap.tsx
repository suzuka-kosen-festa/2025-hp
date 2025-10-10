import type { ReactNode } from "react";

interface GoogleMapProps {
  address: string
  width?: string | number
  height?: string | number
}

function GoogleMap({ address, width = "100%", height = 360 }: GoogleMapProps): ReactNode {
  const query = encodeURIComponent(address);
  const src = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <div style={{ width, height }}>
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
    </div>
  );
}

export default GoogleMap;
