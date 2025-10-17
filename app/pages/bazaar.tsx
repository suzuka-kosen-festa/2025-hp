import type { FC } from "react";
import { Box, Chip, Container, keyframes, styled, Typography } from "@mui/material";
import { useEffect } from "react";
import bazaarData from "@/../contents/bazaar/bazaar.json";
import departmentExhibitionsData from "@/../contents/department_exhibition.json";
import BazaarCard from "@/Components/bazaarCard";
import DepartmentExhibitionCard from "@/Components/DepartmentExhibitionCard";
import Footer from "@/Components/Footer";
import { sitemapData } from "@/data/sitemap";
import { SpaceBackground, Stars } from "./Home";

// 学科別テーマカラーの定義
const departmentColors: Record<string, string> = {
  機械工学科: "#E783AC",
  電気電子工学科: "#AE904A",
  電子情報工学科: "#89D0DD",
  生物応用科学科: "#6E9D45",
  材料工学科: "#002670",
};

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

// 人工衛星の本体
export const SatelliteBody = styled(Box)<{ width: number }>(({ width }) => ({
  "background": "radial-gradient(circle, #ffd700 0%, #ffed4e 50%, #ffd700 100%)",
  "borderRadius": "10px",
  "width": `${width}px`,
  "height": `${width}px`,
  "position": "relative",
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",
  "boxShadow": "0 0 15px rgba(255, 215, 0, 0.6)",
  "&::before": {
    content: "\"\"",
    position: "absolute",
    top: "0",
    left: "60%",
    transform: "translateX(-50%)",
    width: "50%",
    height: "50%",
    background: "radial-gradient(circle,rgb(133, 133, 133) 100%,rgb(156, 156, 156) 100%,rgb(171, 171, 171) 100%)",
    borderRadius: "50%",
    boxShadow: "0 0 15px rgba(255, 215, 0, 0.6)",
  },
  "&::after": {
    content: "\"\"",
    position: "absolute",
    top: "50%",
    left: "60%",
    transform: "translateX(-50%)",
    width: "50%",
    height: "50%",
    background: "radial-gradient(circle,rgb(133, 133, 133) 100%,rgb(156, 156, 156) 100%,rgb(171, 171, 171) 100%)",
    borderRadius: "50%",
    boxShadow: "0 0 15px rgba(255, 215, 0, 0.6)",
  },
}));

// ソーラーパネル（羽）
const SolarPanel = styled(Box)<{ $panelPosition?: "top" | "bottom" }>(({ $panelPosition = "top" }) => ({
  // "background": "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
  "background": "rgba(255, 255, 255, 0.5)",
  "backdropFilter": "blur(10px)",
  "borderRadius": "20px 20px 20px 20px",
  "margin": $panelPosition === "top" ? "0 0 1rem 0" : "1rem 0 0 0",
  "padding": "2rem",
  "position": "relative",
  "overflow": "hidden",
  "border": "3px solid white",
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

// 台形コンポーネント
export const Trapezoid = styled(Box)<{ $variant?: "top" | "bottom", width: number }>(({ $variant = "top", width }) => ({
  width: `${width * 15 / 100}px`,
  height: `${width * 30 / 100}px`,
  background: $variant === "top"
    ? "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)"
    : "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
  border: "2px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 0 15px rgba(74, 144, 226, 0.4)",
  clipPath: $variant === "top"
    ? "polygon(0% 20%, 0% 80%, 100% 100%, 100% 0%)"
    : "polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)",
  position: "relative",
}));

const SectionHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "2rem",
  padding: "1rem 0",
  position: "relative",
  zIndex: 1,
});

const SectionTypeChip = styled(Chip)({
  "fontWeight": "bold",
  "fontSize": "1.2rem",
  "padding": "0.5rem 1rem",
  "height": "auto",
  "background": "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
  "color": "white",
  "border": "2px solid #1a1a1a",
  "boxShadow": "0 0 15px rgba(74, 144, 226, 0.4)",
  "& .MuiChip-label": {
    padding: "0.5rem 1rem",
    textShadow: "0 0 5px rgba(255, 255, 255, 0.3)",
  },
});

export function Satellite({ width, gapsize }: { width: number, gapsize: number }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row", width: "fit-content", justifyContent: "center" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: gapsize }}>
        <Trapezoid $variant="bottom" width={width} />
        <Trapezoid $variant="bottom" width={width} />
      </Box>
      <SatelliteBody width={width} />
    </Box>
  );
}

const Bazar: FC = () => {
  useEffect(() => {
    // ハッシュリンクの処理
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // #を除去
      if (hash && ["bazaar", "exhibitions"].includes(hash)) {
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

  // 学科別に展示をグループ化
  const exhibitionsByDepartment = departmentExhibitionsData.reduce((acc, exhibition) => {
    if (!acc[exhibition.department]) {
      acc[exhibition.department] = [];
    }
    acc[exhibition.department].push(exhibition);
    return acc;
  }, {} as Record<string, typeof departmentExhibitionsData[number][]>);

  return (
    <SpaceBackground>
      <Stars />

      {/* Hero Section */}
      <HeroSection>
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
          Bazaar & Exhibitions
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
          高専祭2025のバザーと学科展示をご紹介します
        </Typography>
      </HeroSection>

      {/* Content */}
      <Container maxWidth="lg">
        {/* 上部ソーラーパネル - バザーセクション */}
        <SolarPanel $panelPosition="top" id="bazaar">
          <SectionHeader>
            <SectionTypeChip
              label="バザー"
              sx={{
                mr: 2,
              }}
            />
          </SectionHeader>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, position: "relative", zIndex: 1 }}>
            {bazaarData.map(bazaar => (
              <Box
                key={bazaar.id}
                sx={{
                  flex: "1 1 300px",
                  minWidth: "300px",
                  maxWidth: { xs: "100%", md: "calc(50% - 12px)", lg: "calc(33.333% - 16px)" },
                }}
              >
                <BazaarCard
                  image={bazaar.image}
                  teamName={bazaar.teamName}
                  bazaarName={bazaar.bazaarName}
                  description={bazaar.description}
                />
              </Box>
            ))}
          </Box>
        </SolarPanel>
        {/* 下部ソーラーパネル - 学科展示セクション */}
        <SolarPanel $panelPosition="bottom" id="exhibitions" sx={{ mb: 25 }}>
          <SectionHeader>
            <SectionTypeChip
              label="学科展示"
              sx={{
                mr: 2,
              }}
            />
          </SectionHeader>

          <Box sx={{ position: "relative", zIndex: 1 }}>
            {Object.entries(exhibitionsByDepartment).map(([department, exhibitions]) => {
              const themeColor = departmentColors[department] || "#4a90e2"; // デフォルトカラー
              return (
                <Box key={department} sx={{ mb: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: themeColor,
                      width: "100%",
                      mb: 2,
                      textAlign: "center",
                      background: "white",
                      borderRadius: "10px",
                      fontWeight: "bold",
                      border: `2px solid ${themeColor}`,
                      py: 3,
                      textShadow: `0 0 10px ${themeColor}50`,
                    }}
                  >
                    {department}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mb: 3 }}>
                    {exhibitions.map(exhibition => (
                      <Box
                        key={exhibition.id}
                        sx={{
                          flex: "1 1 300px",
                          minWidth: "300px",
                          maxWidth: { xs: "100%", md: "calc(50% - 12px)", lg: "calc(33.333% - 16px)" },
                        }}
                      >
                        <DepartmentExhibitionCard
                          department={exhibition.department}
                          title={exhibition.title}
                          description={exhibition.description}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </SolarPanel>
      </Container>
      <Footer siteMap={sitemapData} />
    </SpaceBackground>
  );
};

export default Bazar;
