import type { FC } from "react";
import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router";
import Footer from "@/Components/Footer";
import { sitemapData } from "@/data/sitemap";
import { Bg, SpaceBackground, Stars } from "./Home";

// スタイル付きコンポーネント
const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  padding: "2rem",
  minHeight: "100vh",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "0.5rem",
  },
}));


const NotFound: FC = () => {
  return (
    <SpaceBackground>
      <Stars />
      <Bg>
        {/* Hero Section */}
        <HeroSection>
          <Box sx={{ display: "flex", width: { xs: "95%", sm: "90%", md: "80%" }, justifyContent: "flex-start", p: { xs: 2, sm: 3, md: 5 }, zIndex: 1000 }}>
            <Link to="/" style={{ color: "white", fontSize: "1rem" }}>&lt;&lt; ホームに戻る</Link>
          </Box>
          
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mt: { xs: 1, sm: 2 },
              mb: { xs: 1, sm: 2 },
              fontSize: { xs: "3rem", sm: "4rem", md: "6rem" },
            }}
          >
            404
          </Typography>
          
          <Typography
            variant="h4"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              textAlign: "center",
              fontWeight: "bold",
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            Page Not Found
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
              maxWidth: { xs: "90%", sm: "80%", md: "600px" },
              lineHeight: 1.6,
              mb: 4,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
              px: { xs: 2, sm: 3, md: 0 },
            }}
          >
            お探しのページが見つかりませんでした。
            <br />
            ページが移動または削除された可能性があります。
          </Typography>
        </HeroSection>

        
        <Footer siteMap={sitemapData} />
      </Bg>
    </SpaceBackground>
  );
};

export default NotFound;
