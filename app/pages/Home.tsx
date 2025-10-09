import type { FC } from "react";
import { Box, Container, keyframes, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import EventSummary from "@/Components/EventSummary";
import Footer from "@/Components/Footer";
import GoogleMap from "@/Components/GoogleMap";
import Logo from "@/Components/Logo";
import OfficialSns from "@/Components/OfficialSns";
import Scroll from "@/Components/Scroll";
import { SnsShare } from "@/Components/SnsShare";
import { sitemapData } from "@/data/sitemap";

// 宇宙的なアニメーション
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const orbit = keyframes`
  0% { transform: rotate(0deg) translateX(200px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
`;

// スタイル付きコンポーネント
const SpaceBackground = styled(Box)({
  background: `
    radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%),
    linear-gradient(135deg, #667eea 0%, #764ba2 100%)
  `,
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
});

const Stars = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: `
    radial-gradient(2px 2px at 20px 30px, #eee, transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
    radial-gradient(1px 1px at 90px 40px, #fff, transparent),
    radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
    radial-gradient(2px 2px at 160px 30px, #ddd, transparent)
  `,
  backgroundRepeat: "repeat",
  backgroundSize: "200px 100px",
  animation: `${twinkle} 3s ease-in-out infinite alternate`,
});

const FloatingLogo = styled(Box)({
  animation: `${float} 6s ease-in-out infinite`,
});

const OrbitingElement = styled(Box)({
  position: "absolute",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  background: "linear-gradient(45deg, #ff6b6b, #ffa726)",
  animation: `${orbit} 20s linear infinite`,
});

const HeroSection = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  padding: "2rem",
});

const ContentSection = styled(Box)({
  background: "rgba(0, 0, 0, 0.8)",
  backdropFilter: "blur(10px)",
  borderRadius: "20px",
  margin: "2rem 0",
  overflow: "hidden",
});

const Home: FC = () => {
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("[data-hero-section]");
      const contentSection = document.querySelector("[data-content-section]");

      if (heroSection && contentSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const contentRect = contentSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Heroセクション以外のコンテンツ（EventDetailsSection）が画面に現れているかチェック
        // コンテンツセクションの上端が画面の下端より上にある場合、コンテンツが見え始めている
        const isContentVisible = contentRect.top < windowHeight;

        // Heroセクションが完全に画面から消えていないかもチェック
        const isHeroStillVisible = heroRect.bottom > 0;

        // Heroセクションが見えていて、かつコンテンツセクションが見えていない場合のみ表示
        setIsInHeroSection(isHeroStillVisible && !isContentVisible);
      }
    };

    // 初期状態でも実行
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SpaceBackground>
      <Stars />

      {/* Hero Section */}
      <HeroSection data-hero-section>
        <OrbitingElement sx={{ top: "20%", left: "20%" }} />
        <OrbitingElement sx={{ top: "60%", right: "15%", animationDelay: "-10s" }} />

        <FloatingLogo sx={{ mb: 4 }}>
          <Logo length={600} withStars />
        </FloatingLogo>

        <Typography
          variant="h2"
          component="h1"
          sx={{
            color: "white",
            textAlign: "center",
            mb: 2,
            fontWeight: "bold",
            textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
            background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            p: 5,
            fontFamily: "Noto Serif",
          }}
        >
          <i>60th Suzuka Kosen Festa 2025</i>
        </Typography>
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
            color: "rgba(255, 255, 255, 0.7)",
            textAlign: "center",
            maxWidth: "600px",
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          宇宙の軌道のように、新たな可能性を描く2日間。
          <br />
          鈴鹿高専で繰り広げられる学生たちの創造力の祭典へようこそ。
        </Typography>

        <Box sx={{ display: "flex", gap: 3, alignItems: "center", mb: 4 }}>
          <OfficialSns />
        </Box>
      </HeroSection>

      {/* Fixed Scroll indicator - only visible when hero section is visible */}
      {isInHeroSection && (
        <Box
          sx={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            zIndex: 1000,
          }}
        >
          <Scroll />
        </Box>
      )}

      {/* Event Details Section */}
      <Container maxWidth="lg" data-content-section>
        <ContentSection>
          <EventSummary
            mainTitle="高専祭2025"
            description="テーマ「Orbit」のもと、学生たちが創り上げる2日間の文化祭。研究発表、模擬店、ステージイベントなど、多彩なプログラムをお楽しみください。"
            dateLabel="開催日程"
            date="2025年11月1日（土）・11月2日（日）"
            locationLabel="開催場所"
            location="鈴鹿工業高等専門学校"
          />
        </ContentSection>

        <ContentSection>
          <Box sx={{ p: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: "white",
                textAlign: "center",
                mb: 3,
                fontWeight: "bold",
              }}
            >
              アクセス
            </Typography>
            <GoogleMap
              address="鈴鹿工業高等専門学校"
              height={400}
            />
          </Box>
        </ContentSection>

        <Box sx={{ py: 4, textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              mb: 2,
            }}
          >
            高専祭2025の最新情報をシェアしよう！
          </Typography>
          <SnsShare />
        </Box>
      </Container>
      <Footer siteMap={sitemapData} />
    </SpaceBackground>
  );
};

export default Home;
