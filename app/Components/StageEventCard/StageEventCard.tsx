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
        "minWidth": { xs: 250, sm: 275 },
        "maxWidth": "100%",
        "width": "100%",
        "transition": "0.3s",
        "&:hover": { boxShadow: 6 },
        "borderRadius": { xs: "12px", sm: "16px" },
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
            borderTopLeftRadius: { xs: "12px", sm: "16px" },
            borderTopRightRadius: { xs: "12px", sm: "16px" },
          }}
        />
      )}
      <CardContent sx={{
        "p": { xs: 1.5, sm: 2 },
        "&:last-child": { pb: { xs: 1.5, sm: 2 } },
      }}
      >
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
          }}
        >
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
          <AccessTime sx={{ mr: 0.5, fontSize: { xs: "0.9rem", sm: "1rem" }, color: "white" }} />
          <Typography
            variant="body2"
            sx={{
              color: "white",
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
            }}
          >
            {datetime}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1.5,
          }}
        >
          <Place sx={{ mr: 0.5, fontSize: { xs: "0.9rem", sm: "1rem" }, color: "white" }} />
          <Chip
            label={stage}
            size="small"
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              fontSize: { xs: "0.7rem", sm: "0.75rem" },
            }}
          />
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "white",
            fontSize: { xs: "0.8rem", sm: "0.875rem" },
            lineHeight: { xs: 1.4, sm: 1.6 },
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default StageEventCard;
