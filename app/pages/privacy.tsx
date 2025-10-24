import type { FC } from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import Footer from "@/Components/Footer";
import { sitemapData } from "@/data/sitemap";
import { ja } from "@/locales/ja";
import { Stars } from "./Home";

export const SpaceBackground = styled(Box)({
  background: `
    radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%),
    linear-gradient(135deg, #667eea 0%, #764ba2 100%)
  `,
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
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
      <Stars />
      <Box sx={{ flex: 1 }}>
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
                <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" style={{ color: "#6b75ffff" }}>
                  {ja.privacy.gaLinkText}
                </a>
              </Typography>
            </Box>
          </ContentSection>
        </Container>
      </Box>
      <Footer siteMap={sitemapData} />
    </SpaceBackground>
  );
};

export default Privacy;
