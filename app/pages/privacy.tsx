import type { FC } from "react";
import { Box, Container, Typography, styled } from "@mui/material";
import Footer from "@/Components/Footer";
import { sitemapData } from "@/data/sitemap";
import { ja } from "@/locales/ja";

export const SpaceBackground = styled(Box)({
  background: `
    radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%),
    linear-gradient(135deg, #667eea 0%, #764ba2 100%)
  `,
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
});

const ContentSection = styled(Box)<{ color?: string }>(({ color = "#e9e9e9", theme }) => ({
  background: `${color}33`,
  border: `1px solid ${color}`,
  backdropFilter: "blur(7px)",
  borderRadius: "20px",
  margin: "2rem 0",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    margin: "1rem 0",
    borderRadius: "15px",
  },
  [theme.breakpoints.down("xs")]: {
    margin: "0.5rem 0",
    borderRadius: "10px",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  textAlign: "center",
  fontWeight: "bold",
  background: "white",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  mb: 3,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    mb: 2,
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.25rem",
    mb: 1,
  },
}));

const Privacy: FC = () => {
  return (
    <SpaceBackground>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 }, py: { xs: 8, sm: 10, md: 12 } }}>
        <ContentSection>
          <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            <SectionTitle variant="h4" mb={3}>
              {ja.privacy.title}
            </SectionTitle>
            <Typography variant="body1" sx={{ color: "white", mb: 2 }}>
              {ja.privacy.gaDescription}
            </Typography>
            <Typography variant="body1" sx={{ color: "white", mb: 2 }}>
              {ja.privacy.gaLinkDescription}
              <a href="https://marketingplatform.google.com/about/analytics/terms/ja/" target="_blank" rel="noopener noreferrer" style={{ color: "#6b75ffff" }}>
                Google Analytics 利用規約
              </a>
            </Typography>
          </Box>
        </ContentSection>
      </Container>
      <Footer siteMap={sitemapData} />
    </SpaceBackground>
  );
};

export default Privacy;
