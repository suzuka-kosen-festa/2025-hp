import type { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface TimelineProps {
  title: string
  imageUrl: string
}

function Timeline({ title, imageUrl }: TimelineProps): ReactNode {
  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography
        variant="h3"
        sx={{
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          background: "white",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
          mb: { xs: 1, sm: 2, md: 3 },
        }}
      >
        {title}
      </Typography>
      <Box sx={{ overflow: "hidden", p: { xs: 1, sm: 2 } }}>
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
}

export default Timeline;
