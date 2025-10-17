import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

// インターフェース定義
interface SponsorItem {
  name: string
  image: string
  size: "large" | "medium" | "small"
}

interface SponsorComponentProps {
  sponsors: SponsorItem[]
}

interface SponsorSectionProps {
  sponsors: SponsorItem[]
  size: "large" | "medium" | "small"
}

// 定数・設定
const SPONSOR_CONFIG = {
  large: {
    variant: "h4" as const,
    maxWidth: "70%",
    margin: 1,
    padding: 2,
    maxHeight: "200px",
    // レイアウト設定
    layout: {
      flexDirection: "column" as const,
      flexWrap: "nowrap" as const,
      justifyContent: "center" as const,
      alignItems: "center" as const,
    },
  },
  medium: {
    variant: "h5" as const,
    maxWidth: "40%",
    margin: 1,
    padding: 1.5,
    maxHeight: "150px",
    // レイアウト設定
    layout: {
      flexDirection: "row" as const,
      flexWrap: "wrap" as const,
      justifyContent: "center" as const,
      alignItems: "center" as const,
    },
  },
  small: {
    variant: "h6" as const,
    maxWidth: "30%",
    margin: 0.5,
    padding: 1,
    maxHeight: "100px",
    // レイアウト設定
    layout: {
      flexDirection: "row" as const,
      flexWrap: "wrap" as const,
      justifyContent: "center" as const,
      alignItems: "center" as const,
    },
  },
} as const;

// ユーティリティ関数
function isValidImage(imageUrl: string): boolean {
  return (
    imageUrl != null
    && imageUrl.trim() !== ""
    && imageUrl !== "undefined"
    && imageUrl !== "null"
  );
}

function sortByJapaneseName(sponsors: SponsorItem[]): SponsorItem[] {
  return [...sponsors].sort((a, b) => {
    // より詳細なロケール設定で日本語のソートを改善
    const options: Intl.CollatorOptions = {
      numeric: true, // 数値を数値として扱う（"10" > "2"）
      caseFirst: "upper", // 大文字を先に
      sensitivity: "accent", // アクセント記号を区別
      ignorePunctuation: false, // 句読点を考慮
      usage: "sort", // ソート用途で最適化
    };

    // Intl.Collatorを使用してより正確な日本語ソートを実現
    const collator = new Intl.Collator("ja-JP", options);
    return collator.compare(a.name, b.name);
  });
}

// コンポーネント関数（最下位コンポーネントから順番に）
function SponsorCard({ name, image, size }: SponsorItem): ReactNode {
  const hasValidImage = isValidImage(image);
  const [imgError, setImgError] = useState(false);
  const config = SPONSOR_CONFIG[size];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: config.margin,
        padding: config.padding,
        maxWidth: config.maxWidth,
        textAlign: "center",
      }}
    >
      {hasValidImage && !imgError
        ? (
            <img
              src={image}
              alt={name}
              style={{
                maxWidth: "100%",
                maxHeight: config.maxHeight,
                objectFit: "contain",
              }}
              onError={() => setImgError(true)}
            />
          )
        : (
            <Typography
              variant={config.variant}
              component="div"
              sx={{
                fontWeight: "bold",
                lineHeight: 1.2,
                color: "black",
                fontSize: {
                  xs: size === "large" ? "1.5rem" : size === "medium" ? "1.25rem" : "1.1rem",
                  sm: size === "large" ? "1.75rem" : size === "medium" ? "1.35rem" : "1.15rem",
                  md: size === "large" ? "2rem" : size === "medium" ? "1.5rem" : "1.25rem",
                },
              }}
            >
              {name}
            </Typography>
          )}
    </Box>
  );
}

function SponsorSection({ sponsors, size }: SponsorSectionProps): ReactNode {
  if (sponsors.length === 0) {
    return null;
  }

  const config = SPONSOR_CONFIG[size];

  return (
    <Box sx={{ mb: { xs: 10, sm: 15, md: 20 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: config.layout.flexDirection,
          flexWrap: config.layout.flexWrap,
          justifyContent: config.layout.justifyContent,
          alignItems: config.layout.alignItems,
          width: { xs: "95%", sm: "90%", md: "80%" },
          margin: "0 auto",
          gap: { xs: 1, sm: 2, md: 0 },
        }}
      >
        {sponsors.map(sponsor => (
          <SponsorCard key={`${size}-${sponsor.name}`} {...sponsor} />
        ))}
      </Box>
    </Box>
  );
}

// メインコンポーネント
function Sponsor(props: SponsorComponentProps): ReactNode {
  const { sponsors } = props;

  // サイズ別にグループ化
  const largeSponsors = sortByJapaneseName(sponsors.filter(s => s.size === "large"));
  const mediumSponsors = sortByJapaneseName(sponsors.filter(s => s.size === "medium"));
  const smallSponsors = sortByJapaneseName(sponsors.filter(s => s.size === "small"));

  return (
    <Box sx={{ mt: { xs: 5, sm: 8, md: 10 }, px: { xs: 1, sm: 2, md: 0 } }}>
      <SponsorSection sponsors={largeSponsors} size="large" />
      <SponsorSection sponsors={mediumSponsors} size="medium" />
      <SponsorSection sponsors={smallSponsors} size="small" />
    </Box>
  );
}

export default Sponsor;
