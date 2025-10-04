import type { ReactNode } from "react";
import { AccessTime, Place } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

interface StageEventCardProps {
  title: string
  datetime: string
  stage: string
  description: string
}

function StageEventCard({
  title,
  datetime,
  stage,
  description,
}: StageEventCardProps): ReactNode {
  return (
    <Card
      sx={{
        "minWidth": 275,
        "transition": "0.3s",
        "&:hover": { boxShadow: 6 },
      }}
    >
      <CardContent sx={{ "p": 2, "&:last-child": { pb: 2 } }}>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "text.secondary",
            mb: 0.5,
          }}
        >
          <AccessTime sx={{ mr: 0.5, fontSize: "1rem" }} />
          <Typography variant="body2">{datetime}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1.5,
          }}
        >
          <Place sx={{ mr: 0.5, fontSize: "1rem", color: "text.secondary" }} />
          <Chip label={stage} color="primary" size="small" variant="outlined" />
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default StageEventCard;
