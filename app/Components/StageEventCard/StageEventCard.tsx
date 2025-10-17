import type { ReactNode } from "react";
import { AccessTime, Place } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

interface StageEventCardProps {
  image?: string
  title: string
  datetime: string
  stage: string
  description: string
  color: string
}

function StageEventCard({
  image,
  title,
  datetime,
  stage,
  description,
  color,
}: StageEventCardProps): ReactNode {
  const bgColor = `${color}33`;
  return (
    <Card
      sx={{
        "minWidth": 275,
        "transition": "0.3s",
        "&:hover": { boxShadow: 6 },
        "borderRadius": "16px",
        "border": `1px solid ${color}`,
        "color": color,
        "backgroundColor": bgColor,
        "height": "stretch",
      }}
    >
      {image && (
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            aspectRatio: "16/9",
            objectFit: "cover",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        />
      )}
      <CardContent sx={{ "p": 2, "&:last-child": { pb: 2 } }}>
        <Typography variant="h5" component="div" gutterBottom sx={{ color: "white", fontWeight: "bold" }}>
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "white",
            mb: 0.5,
          }}
        >
          <AccessTime sx={{ mr: 0.5, fontSize: "1rem", color: "white" }} />
          <Typography variant="body2" sx={{ color: "white" }}>{datetime}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1.5,
          }}
        >
          <Place sx={{ mr: 0.5, fontSize: "1rem", color: "white" }} />
          <Chip label={stage} size="small" variant="outlined" sx={{ color: "white", borderColor: "white" }} />
        </Box>
        <Typography variant="body2" sx={{ color: "white" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default StageEventCard;
