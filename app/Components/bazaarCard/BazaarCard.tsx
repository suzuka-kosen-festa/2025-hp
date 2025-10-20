/** @jsxImportSource @emotion/react */
import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { ja } from "../../locales/ja";

export interface BazaarComponentProps {
  image: string
  teamName: string
  bazaarName: string
  description: string
}

function BazaarCard(props: BazaarComponentProps): ReactNode {
  const { image, teamName, bazaarName, description } = props;
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // 既にnot-found画像の場合は何もしない
    if (e.currentTarget.src.endsWith("/images/not-found.png")) {
      return;
    }
    e.currentTarget.src = "/images/not-found.png";
  };
  return (
    <Card sx={{
      maxWidth: { xs: "100%", sm: 345 },
      width: "100%",
      height: "stretch",
      borderRadius: { xs: "12px", sm: "16px" },
    }}
    >
      <Box sx={{
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "flex-start",
      }}
      >
        <CardMedia
          component="img"
          height="auto"
          image={image}
          alt={ja.bazaarCard.imageAlt(bazaarName)}
          onError={handleImageError}
          sx={{
            aspectRatio: "16/9",
            objectFit: "cover",
          }}
        />
        <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            mb={0}
            sx={{
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
            }}
          >
            {bazaarName}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            {teamName}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
              lineHeight: { xs: 1.4, sm: 1.6 },
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default BazaarCard;
