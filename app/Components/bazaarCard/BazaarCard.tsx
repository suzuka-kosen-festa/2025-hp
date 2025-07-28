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
    e.currentTarget.src = "/images/not-found.png";
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box sx={{
        height: "350px",
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
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ja.bazaarCard.name(bazaarName, teamName)}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default BazaarCard;
