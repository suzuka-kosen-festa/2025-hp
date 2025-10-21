import type { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface EventSummaryProps {
  mainTitle?: string
  description?: string
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
        backgroundColor: "none",
        // backdropFilter: "blur(5px)",
        color: "white",
        p: { xs: 2, sm: 3, md: 4 },
        fontFamily: "'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      {mainTitle && (
        <Typography
          variant="h2"
          component="h1"
          sx={{
            textAlign: "center",
            mb: 2,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          {mainTitle}
        </Typography>
      )}
      {description && (
        <Typography sx={{
          textAlign: "center",
          mb: { xs: 4, sm: 6, md: 8 },
          fontSize: { xs: "0.9rem", sm: "1rem" },
        }}
        >
          {description}
        </Typography>
      )}

      <Box sx={{ mb: { xs: 3, sm: 4 } }}>
        <Box sx={{ display: "inline-block", borderBottom: "1px solid orange", pb: 0.5, mb: 2 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
            }}
          >
            {dateLabel}
          </Typography>
        </Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
          }}
        >
          {date}
        </Typography>
      </Box>

      <Box>
        <Box sx={{ display: "inline-block", borderBottom: "1px solid orange", pb: 0.5, mb: 2 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
            }}
          >
            {locationLabel}
          </Typography>
        </Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
          }}
        >
          {location}
        </Typography>
      </Box>
    </Box>
  );
}

export default EventSummary;
