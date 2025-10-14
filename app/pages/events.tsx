import type { FC } from "react";
import { Box, Chip, Container, keyframes, styled, Typography } from "@mui/material";
import { useEffect } from "react";
import Footer from "@/Components/Footer";
import StageEventCard from "@/Components/StageEventCard";
import { type EventData, eventsData, eventTypes } from "@/data/events";
import { sitemapData } from "@/data/sitemap";
import { SpaceBackground, Stars } from "./Home";

// 宇宙的なアニメーション
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// スタイル付きコンポーネント
const HeroSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  padding: "2rem",
});

const ContentSection = styled(Box)<{ borderColor?: string }>(({ borderColor = "#FD3D21" }) => ({
  "background": "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
  "borderRadius": "20px 20px 20px 20px",
  "margin": "0 0 1rem 0",
  "padding": "2rem",
  "position": "relative",
  "overflow": "hidden",
  "border": `3px solid ${borderColor}`,
  "boxShadow": "0 0 20px rgba(74, 144, 226, 0.3)",
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

const EventSection = styled(Box)({
  margin: "3rem 0",
});

const SectionHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "2rem",
  padding: "1rem 0",
});

const EventTypeChip = styled(Chip)({
  "fontWeight": "bold",
  "fontSize": "1.2rem",
  "padding": "0.5rem 1rem",
  "height": "auto",
  "& .MuiChip-label": {
    padding: "0.5rem 1rem",
  },
});

const Events: FC = () => {
  useEffect(() => {
    // ハッシュリンクの処理
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // #を除去
      if (hash && ["stage", "live", "mystery"].includes(hash)) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "instant" });
        }
      }
    };

    // 初回読み込み時の処理
    handleHashChange();

    // ハッシュ変更の監視
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // イベントタイプ別にイベントをグループ化
  const eventsByType = eventsData.reduce((acc, event) => {
    if (!acc[event.type]) {
      acc[event.type] = [];
    }
    acc[event.type].push(event);
    return acc;
  }, {} as Record<string, EventData[]>);

  return (
    <SpaceBackground>
      <Stars />
      {/* Hero Section */}
      <HeroSection>
        { /*
        <Box sx={{ display: "flex",width: "80%", justifyContent: "flex-start", p: 5, zIndex: 1000 }}>
          <Link to="/" style={{ color: "white", fontSize: 20 }}>&lt;&lt; 戻る</Link>
        </Box>
        */ }
        <Typography
          variant="h1"
          component="h1"
          sx={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
            background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mt: 2,
            mb: 2,
            animation: `${float} 6s ease-in-out infinite`,
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
            mb: 4,
          }}
        >
          高専祭2025で開催される様々なイベントをご紹介します
        </Typography>
      </HeroSection>

      {/* Events Content */}
      <Container maxWidth="lg">
        {Object.entries(eventTypes).map(([typeKey, typeConfig]) => {
          const events = eventsByType[typeKey] || [];

          return (
            <EventSection key={typeKey} sx={{ mb: 25 }}>
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

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                  {events.map(event => (
                    <Box
                      key={event.id}
                      sx={{
                        flex: "1 1 300px",
                        minWidth: "300px",
                        maxWidth: { xs: "100%", md: "calc(50% - 12px)", lg: "calc(33.333% - 16px)" },
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
    </SpaceBackground>
  );
};

export default Events;
