import type { FC } from "react";
import { ArrowForward } from "@mui/icons-material";
import { Box, Container, keyframes, Link, styled, Typography } from "@mui/material";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Link as RouterLink } from "react-router";
import sponsorsData from "@/../contents/sponsor.json";
import BazaarCard from "@/Components/bazaarCard";
import { Carousel, CarouselContent, CarouselFooter, CarouselItem, CarouselNext, CarouselPrevious } from "@/Components/Carousel/Carousel";
import DepartmentExhibitionCard from "@/Components/DepartmentExhibitionCard";
import EventSummary from "@/Components/EventSummary";
import { EventTypeChip } from "@/Components/EventTypeChip/EventTypeChip";
import Footer from "@/Components/Footer";
import GoogleMap from "@/Components/GoogleMap";
import OfficialSns from "@/Components/OfficialSns";
import Scroll from "@/Components/Scroll";
import { SectionTypeChip } from "@/Components/SectionTypeChip/SectionTypeChip";
import { SnsShare } from "@/Components/SnsShare";
import Sponsor from "@/Components/Sponsor/Sponsor";
import SponsorCard from "@/Components/sponsorCard";
import StageEventCard from "@/Components/StageEventCard";
import { eventTypes } from "@/data/events";
import { sitemapData } from "@/data/sitemap";
import { sponsorCardsData } from "@/data/sponsorCards";
import sortedBazaarData from "@/lib/constants/bazaar";
import exhibitionsByDepartment from "@/lib/constants/departmentExhibitions";
import eventsByType from "@/lib/constants/events";

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const orbit = keyframes`
  0% { transform: rotate(0deg) translateX(200px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
`;

// スタイル付きコンポーネント
export const SpaceBackground = styled(Box)({
  background: `
    radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%),
    linear-gradient(135deg, #667eea 0%, #764ba2 100%)
  `,
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
});

export const Bg = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const STAR_COUNT = 50;

export const Stars: FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: STAR_COUNT }).map((_, index) => {
      // 3〜6px を中心に出現（3px:50%, 4px:30%, 5px:15%, 6px:5%）
      const r = Math.random();
      const size = r < 0.5 ? 4 : r < 0.8 ? 5 : r < 0.95 ? 6 : 8;
      const duration = 2 + Math.random() * 4; // 2s - 6s で点滅
      const delay = -Math.random() * 6; // 開始をバラけさせる（負の遅延で途中から再生）
      const opacity = 0.4 + Math.random() * 0.6; // 0.4 - 1.0
      return {
        id: index,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size,
        duration,
        delay,
        opacity,
      };
    });
  }, []);

  return (
    <Box
      aria-hidden="true"
      sx={{ position: "fixed", inset: 0, width: "100%", height: "100%" }}
    >
      {stars.map(star => (
        <Box
          key={star.id}
          sx={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.95)",
            opacity: star.opacity,
            boxShadow:
              star.size >= 6
                ? "0 0 10px rgba(255,255,255,0.95), 0 0 18px rgba(255,255,255,0.7)"
                : star.size === 5
                  ? "0 0 8px rgba(255,255,255,0.9), 0 0 14px rgba(255,255,255,0.6)"
                  : star.size === 4
                    ? "0 0 6px rgba(255,255,255,0.8)"
                    : "0 0 5px rgba(255,255,255,0.7)",
            animation: `${twinkle} ${star.duration}s ease-in-out infinite alternate`,
            animationDelay: `${star.delay}s`,
            willChange: "opacity",
          }}
        />
      ))}
    </Box>
  );
};

const FloatingLogo = styled(Box)({
  // animation: `${float} 6s ease-in-out infinite`,
});

const _OrbitingElement = styled(Box)({
  position: "absolute",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  background: "linear-gradient(45deg, #ff6b6b, #ffa726)",
  animation: `${orbit} 20s linear infinite`,
});

const HeroSection = styled(Box)(({ theme }) => ({
  width: "stretch",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  padding: "2rem",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
    minHeight: "100vh",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "0.5rem",
  },
}));

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

const ContentSectionSponsor = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(5px)",
  borderRadius: "20px",
  margin: "2rem 0",
  overflow: "hidden",
  width: "100%",
  justifyContent: "center",
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

const Home: FC = () => {
  const [isScrollVisible, setIsScrollVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("[data-hero-section]");
      if (!heroSection) {
        return;
      }

      const heroRect = heroSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Heroの下端がビューポート高さの90%より上(= 0.9Hより小さい)に来たらフェードアウト
      const shouldShow = heroRect.bottom > windowHeight * 0.9;
      setIsScrollVisible(shouldShow);
    };

    // 初期計算
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SpaceBackground>
      <Stars />

      {/* Hero Section */}
      <Bg>
        <HeroSection data-hero-section>
          {/*
        <OrbitingElement sx={{ top: "20%", left: "20%" }} />
        <OrbitingElement sx={{ top: "60%", right: "15%", animationDelay: "-10s" }} />
        */}
          <FloatingLogo sx={{
            width: { xs: "90%", sm: "70%", md: "50%" },
            justifyContent: "center",
            bgcolor: "#0E131BCC",
            alignItems: "center",
            textAlign: "center",
            my: { xs: 4, sm: 8, md: 12 },
            // boxShadow: "100px 100px 100px 100px #0E131B",
            borderRadius: { xs: "15px", sm: "18px", md: "20px" },
          }}
          >
            <img src="/logo.svg" alt="Logo" style={{ width: "100%" }} />
          </FloatingLogo>

          <Box sx={{ mb: 2, pt: 0, pb: { xs: 5, sm: 6, md: 8 }, px: { xs: 2, sm: 3, md: 5 }, zIndex: 100 }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: "#6b75ffff",
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "Noto Serif",
                pr: 1,
                fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" },
                lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
                // background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)",
                /*
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                zIndex: 1000,
                backdropFilter: "blur(10px)",
                */
              }}
            >
              <i>60th Suzuka Kosen Festa 2025</i>
              <br />
              <i>11/1・11/2</i>
            </Typography>
          </Box>
          {/*
        <Typography
          variant="h4"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            textAlign: "center",
            mb: 4,
            fontWeight: 300,
            letterSpacing: "0.1em",
          }}
        >
          Theme: Orbit
        </Typography>
        */}

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
              zIndex: 105,
            }}
          >
            60周年の軌跡と、新たな可能性を描く2日間。
          </Typography>

          <Box sx={{ display: "flex", gap: { xs: 2, sm: 3 }, alignItems: "center", mb: 4, flexWrap: "wrap", justifyContent: "center" }}>
            <OfficialSns />
          </Box>
        </HeroSection>

        {/* Fixed Scroll indicator - フェードイン/アウト */}
        <Box
          sx={{
            position: "fixed",
            bottom: { xs: "20px", sm: "30px", md: "40px" },
            right: { xs: "20px", sm: "30px", md: "40px" },
            zIndex: 1000,
            opacity: isScrollVisible ? 1 : 0,
            transition: "opacity 300ms ease",
            pointerEvents: isScrollVisible ? "auto" : "none",
          }}
          aria-hidden={!isScrollVisible}
        >
          <Scroll />
        </Box>

        {/* Event Details Section */}
        <Container maxWidth="lg" data-content-section sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <ContentSection>
            <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
              <SectionTitle variant="h4" mb={3}>
                開催概要
              </SectionTitle>
              <EventSummary
                dateLabel="開催日程"
                date="2025年11月1日(土)・11月2日(日)"
                locationLabel="開催場所"
                location="鈴鹿工業高等専門学校"
              />
            </Box>
          </ContentSection>

          <ContentSection>
            <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, textAlign: "center" }}>
              <SectionTitle
                variant="h4"
                mb={3}
              // component="h2"
              >
                アクセス
              </SectionTitle>
              <Box sx={{ overflow: "hidden", p: { xs: 2, sm: 3 }, mb: { xs: 3, sm: 4, md: 5 } }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    mb: { xs: 2, sm: 3 },
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                  }}
                >
                  〒510-0294 三重県鈴鹿市白子町 鈴鹿工業高等専門学校
                </Typography>
                <GoogleMap
                  address="鈴鹿工業高等専門学校"
                  height={400}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    mt: { xs: 2, sm: 3 },
                    mb: { xs: 2, sm: 3 },
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    lineHeight: { xs: 1.4, sm: 1.6 },
                  }}
                >
                  近鉄名古屋線白子駅下車、
                  <br />
                  三重交通バス白子駅西口から平田町駅行又は鈴鹿サーキット行に乗車約10分、
                  <br />
                  東旭が丘3丁目で下車徒歩約7分。
                </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: "1px solid orange", width: "fit-content", mb: { xs: 2, sm: 3 } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      p: 1,
                      pb: 0,
                      fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    ご来場にあたっての注意事項
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      p: 1,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      lineHeight: { xs: 1.4, sm: 1.6 },
                    }}
                  >
                    駐車スペースに限りがございますので、公共交通機関でのご来場にご協力ください
                  </Typography>
                </Box>
              </Box>
            </Box>
          </ContentSection>

          <ContentSection>
            <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, display: "flex", flexDirection: "column", gap: 2 }}>
              <SectionTitle
                variant="h4"
                mb={3}
                sx={{ textAlign: "center" }}
              // component="h2"
              >
                バザー・学科展示
              </SectionTitle>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <SectionTypeChip
                    label="バザー"
                    sx={{
                      mr: 2,
                      width: "fit-content",
                    }}
                  />
                  <Link component={RouterLink} to="/bazaar#bazaar" sx={{ display: "flex", alignItems: "center", textDecoration: "none", color: "white", gap: 1, fontWeight: "600" }}>
                    一覧で見る
                    <ArrowForward />
                  </Link>
                </Box>
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  autoPlay
                >
                  <CarouselContent>
                    {sortedBazaarData.map(bazaar => (
                      <CarouselItem
                        key={bazaar.id}
                        sx={{
                          flexBasis: {
                            xs: "100%",
                            sm: "50%",
                            md: "33.333333%",
                          },
                        }}
                      >
                        <BazaarCard
                          image={bazaar.image}
                          teamName={bazaar.teamName}
                          bazaarName={bazaar.bazaarName}
                          description={bazaar.description}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselFooter>
                    <CarouselPrevious sx={{ position: "static", transform: "none" }} />
                    <CarouselNext sx={{ position: "static", transform: "none" }} />
                  </CarouselFooter>
                </Carousel>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <SectionTypeChip
                  label="学科展示"
                  sx={{
                    mr: 2,
                    width: "fit-content",
                  }}
                />
                <Link component={RouterLink} to="/bazaar#department" sx={{ display: "flex", alignItems: "center", textDecoration: "none", color: "white", gap: 1, fontWeight: "600" }}>
                  一覧で見る
                  <ArrowForward />
                </Link>
              </Box>

              {Object.entries(exhibitionsByDepartment).map(([department, exhibitions]) => (
                <Fragment key={department}>
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                  >
                    <CarouselContent>
                      {exhibitions.map(exhibition => (
                        <CarouselItem
                          key={exhibition.id}
                          sx={{
                            flexBasis: {
                              xs: "100%",
                              sm: "50%",
                              md: "33.333333%",
                            },
                          }}
                        >
                          <DepartmentExhibitionCard department={exhibition.department} title={exhibition.title} description={exhibition.description} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselFooter>
                      <CarouselPrevious sx={{ position: "static", transform: "none" }} />
                      <CarouselNext sx={{ position: "static", transform: "none" }} />
                    </CarouselFooter>
                  </Carousel>
                </Fragment>
              ))}

            </Box>
          </ContentSection>

          <ContentSection>
            <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, display: "flex", flexDirection: "column", gap: 2 }}>

              <SectionTitle
                variant="h4"
                mb={3}
              // component="h2"
              >
                当日のイベント
              </SectionTitle>

              {Object.entries(eventTypes).map(([typeKey, typeConfig]) => {
                const events = eventsByType[typeKey] || [];

                return (
                  <Fragment key={typeKey}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <EventTypeChip
                        label={typeConfig.label}
                        sx={{
                          backgroundColor: typeConfig.color,
                          color: "white",
                          width: "fit-content",
                        }}
                      />
                      <Link component={RouterLink} to={`/events#${typeConfig.anchor}`} sx={{ display: "flex", alignItems: "center", textDecoration: "none", color: "white", gap: 1, fontWeight: "600" }}>
                        一覧で見る
                        <ArrowForward />
                      </Link>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <Carousel
                        opts={{
                          align: "start",
                        }}
                      >
                        <CarouselContent>
                          {events.map(event => (
                            <CarouselItem
                              key={event.id}
                              sx={{
                                flexBasis: {
                                  xs: "100%",
                                  sm: "50%",
                                  md: "33.333333%",
                                },
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
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselFooter>
                          <CarouselPrevious sx={{ position: "static", transform: "none" }} />
                          <CarouselNext sx={{ position: "static", transform: "none" }} />
                        </CarouselFooter>
                      </Carousel>
                    </Box>
                  </Fragment>
                );
              })}
            </Box>
          </ContentSection>

          <SectionTitle
            variant="h4"
            mb={3}
          >
            協賛企業
          </SectionTitle>
          <ContentSectionSponsor>
            {sponsorCardsData.length === 0 && (sponsorsData as any[]).filter(sponsor => sponsor?.name && sponsor.name.trim() !== "").length === 0
              ? (
                  <Box sx={{ p: 4, textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "rgba(0, 0, 0, 1)",
                        fontWeight: "normal",
                      }}
                    >
                      掲載準備中です。準備が出来次第随時掲載させていただきます。
                    </Typography>
                  </Box>
                )
              : (
                  <>
                    {sponsorCardsData.map(sponsorCard => (
                      <Box key={sponsorCard.sponsorName} sx={{ p: 2, backdropFilter: "blur(10px)" }}>
                        <SponsorCard
                          image={sponsorCard.image}
                          sponsorName={sponsorCard.sponsorName}
                          description={sponsorCard.description}
                          phone={sponsorCard.phone}
                        />
                      </Box>
                    ))}
                    <Box sx={{ p: 4, backdropFilter: "blur(10px)" }}>
                      <Sponsor sponsors={sponsorsData as Array<{ name: string, image: string, size: "large" | "medium" | "small" }>} />
                    </Box>
                  </>
                )}
          </ContentSectionSponsor>

          <Box sx={{ py: { xs: 2, sm: 3, md: 4 }, textAlign: "center", px: { xs: 2, sm: 3, md: 4 } }}>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                mb: 2,
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              高専祭2025の最新情報をシェアしよう！
            </Typography>
            <SnsShare />
          </Box>
        </Container>
        <Footer siteMap={sitemapData} />
      </Bg>
    </SpaceBackground>
  );
};

export default Home;
