import type { ReactNode } from "react";
import { Box, Divider, Typography } from "@mui/material";

interface EventSummaryProps {
  mainTitle: string
  description: string
  dateLabel: string
  date: string
  locationLabel: string
  location: string
}

function EventSummary({
  mainTitle,
  description,
  dateLabel,
  date,
  locationLabel,
  location,
}: EventSummaryProps): ReactNode {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        p: 4,
        fontFamily: "sans-serif",
      }}
    >
      <Typography variant="h2" component="h1" sx={{ textAlign: "center", mb: 2 }}>
        {mainTitle}
      </Typography>
      <Typography sx={{ textAlign: "center", mb: 8 }}>
        {description}
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          {dateLabel}
        </Typography>
        <Divider sx={{ borderColor: "orange", borderWidth: 1, mb: 2 }} />
        <Typography variant="h4" sx={{ textAlign: "center" }}>{date}</Typography>
      </Box>

      <Box>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          {locationLabel}
        </Typography>
        <Divider sx={{ borderColor: "orange", borderWidth: 1, mb: 2 }} />
        <Typography variant="h4" sx={{ textAlign: "center" }}>{location}</Typography>
      </Box>
    </Box>
  );
}

export default EventSummary;
