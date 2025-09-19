/** @jsxImportSource @emotion/react */
import type { ReactNode } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ja } from "../../locales/ja";

export interface SponsorCardComponentProps {
  image: string;
  sponsorName: string;
  description: string;
  phone?: string;         // 例: "059-389-7860"
}

function SponsorCard(props: SponsorCardComponentProps): ReactNode {
  const { image, sponsorName, description, phone } = props;
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.currentTarget.src.endsWith("/images/not-found.png")) return;
    e.currentTarget.src = "/images/not-found.png";
  };

  return (
    <Card
      elevation={4}
      sx={{
        mx: "auto",
        maxWidth: { xs: 360, sm: 560, lg: 980 },
        borderRadius: 3,
      }}
    >
      <Stack
        direction={{ xs: "column", lg: "row" }}
        sx={{ alignItems: "stretch" }}
      >
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: "100%", lg: 420 },
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={ja.sponsorCard.imageAlt(sponsorName)}
            onError={handleImageError}
          />
        </Box>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1.5,
            p: { xs: 2, sm: 3 },
          }}
        >
          <Typography
            variant={isLgUp ? "h5" : "h6"}
            component="h2"
            sx={{ fontWeight: 700, textAlign: { xs: "center", lg: "left" } }}
          >
            {ja.sponsorCard.name(sponsorName)}
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", whiteSpace: "pre-line" }}
          >
            {description}
          </Typography>

          {phone && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <Typography
                variant="body1"
                component="a"
                href={`tel:${phone.replace(/-/g, "")}`}
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                {phone}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Stack>
    </Card>
  );
}

export default SponsorCard;
