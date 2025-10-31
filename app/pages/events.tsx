import type { FC } from "react";
import { Box, Container, keyframes, styled, Typography } from "@mui/material";
import { Link } from "react-router";
import { EventTypeChip } from "@/Components/EventTypeChip/EventTypeChip";
import Footer from "@/Components/Footer";
import StageEventCard from "@/Components/StageEventCard";
import { eventTypes } from "@/data/events";
import { sitemapData } from "@/data/sitemap";
import eventsByType from "@/lib/constants/events";
import { Bg, SpaceBackground, Stars } from "./Home";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// スタイル付きコンポーネント
const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  padding: "2rem",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "0.5rem",
  },
}));

const ContentSection = styled(Box)<{ borderColor?: string }>(({ borderColor = "#FD3D21", theme }) => ({
  "background": "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
  "borderRadius": "20px 20px 20px 20px",
  "margin": "0 0 1rem 0",
  "padding": "2rem",
  "position": "relative",
  "overflow": "hidden",
  "border": `3px solid ${borderColor}`,
  "boxShadow": "0 0 20px rgba(74, 144, 226, 0.3)",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
    borderRadius: "15px",
    margin: "0 0 0.5rem 0",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "0.5rem",
    borderRadius: "10px",
  },
  "&::before": {
    content: "\"\"",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(90deg, 
      transparent 0%, 
      rgba(74, 144, 226, 0.1) 25%, 
      transparent 50%, 
      rgba(74, 144, 226, 0.1) 75%, 
      transparent 100%)`,
    animation: `${rotate} 20s linear infinite`,
  },
}));

const EventSection = styled(Box)(({ theme }) => ({
  margin: "1rem 0",
  [theme.breakpoints.down("sm")]: {
    margin: "0.5rem 0",
  },
  [theme.breakpoints.down("xs")]: {
    margin: "0.25rem 0",
  },
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "2rem",
  padding: "1rem 0",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "1rem",
    padding: "0.5rem 0",
  },
}));

const Events: FC = () => {
  return (
    <SpaceBackground>
      <Bg>
        <Stars />
        {/* Hero Section */}
        <HeroSection>
          <Box sx={{ display: "flex", width: { xs: "95%", sm: "90%", md: "80%" }, justifyContent: "flex-start", p: { xs: 2, sm: 3, md: 5 }, zIndex: 1000 }}>
            <Link to="/" style={{ color: "white", fontSize: "1rem" }}>&lt;&lt; 戻る</Link>
          </Box>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              background: "linear-gradient(45deg, #4ecdc4, #45b7d1)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mt: { xs: 1, sm: 2 },
              mb: { xs: 1, sm: 2 },
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            }}
          >
            Events
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
              lineHeight: 1.6,
              mb: { xs: 2, sm: 3, md: 4 },
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              px: { xs: 2, sm: 3, md: 0 },
            }}
          >
            高専祭2025で開催される様々なイベントをご紹介します
          </Typography>
        </HeroSection>

        {/* Events Content */}
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {Object.entries(eventTypes).map(([typeKey, typeConfig], index) => {
            const events = eventsByType[typeKey] || [];
            const isLastSection = index === Object.entries(eventTypes).length - 1;

            return (
              <EventSection key={typeKey} sx={{ mb: isLastSection ? { xs: 15, sm: 20, md: 25 } : { xs: 5, sm: 10, md: 15 } }}>
                <ContentSection borderColor={typeConfig.color}>
                  <SectionHeader id={typeConfig.anchor}>
                    <EventTypeChip
                      label={typeConfig.label}
                      sx={{
                        backgroundColor: typeConfig.color,
                        color: "white",
                        mr: 2,
                      }}
                    />
                  </SectionHeader>

                  {/* <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.3)', mb: 3 }} /> */}

                  <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: { xs: 2, sm: 3 },
                    justifyContent: "center",
                  }}
                  >
                    {events.map(event => (
                      <Box
                        key={event.id}
                        sx={{
                          flex: "1 1 300px",
                          minWidth: { xs: "280px", sm: "300px" },
                          maxWidth: { xs: "100%", sm: "calc(50% - 8px)", md: "calc(50% - 12px)", lg: "calc(33.333% - 16px)" },
                        }}
                      >
                        <StageEventCard
                          image={event.image || undefined}
                          title={event.title}
                          datetime={event.datetime}
                          stage={event.stage}
                          description={event.description}
                          color={typeConfig.color}
                        />
                      </Box>
                    ))}
                  </Box>
                </ContentSection>
              </EventSection>
            );
          })}
        </Container>
        <Footer siteMap={sitemapData} />
      </Bg>
    </SpaceBackground>
  );
};

export default Events;
