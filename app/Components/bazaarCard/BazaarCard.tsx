/** @jsxImportSource @emotion/react */
import type { ReactNode } from "react";
import type { BazaarComponentProps } from "../../locales/ja";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { ja } from "../../locales/ja";

function BazaarCard(props: BazaarComponentProps): ReactNode {
  const { image, teamName, bazaarName, description: desc } = props;
  const truncatedDescription = desc.length > 50 ? `${desc.slice(0, 50)}...` : desc;
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/images/not-found.png";
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea sx={{
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
            {truncatedDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BazaarCard;
