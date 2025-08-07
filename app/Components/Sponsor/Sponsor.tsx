import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

interface SponsorItem {
  name: string
  image: string
  size: "large" | "medium" | "small"
}

interface SponsorComponentProps {
  sponsors: SponsorItem[]
}

// 画像が有効かどうかをチェックする関数
function isValidImage(imageUrl: string): boolean {
  return Boolean(imageUrl && imageUrl.trim() !== "" && imageUrl !== "undefined" && imageUrl !== "null");
}

// サイズごとのvariantとfontSizeを一元管理
const SPONSOR_STYLE = {
  large: {
    variant: "h4" as const,
    fontSize: "1.5rem",
  },
  medium: {
    variant: "h5" as const,
    fontSize: "1.25rem",
  },
  small: {
    variant: "h6" as const,
    fontSize: "0.875rem",
  },
};

function Sponsor_Large({ name, image }: SponsorItem): ReactNode {
  const hasValidImage = isValidImage(image);
  const [imgError, setImgError] = useState(false);
  const style = SPONSOR_STYLE.large;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 1,
        padding: 2,
        maxWidth: "70%",
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
                maxHeight: "200px",
                objectFit: "contain",
              }}
              onError={() => setImgError(true)}
            />
          )
        : (
            <Typography
              variant={style.variant}
              component="div"
              sx={{
                fontWeight: "bold",
                color: "#333",
                lineHeight: 1.2,
              }}
            >
              {name}
            </Typography>
          )}
    </Box>
  );
}

function Sponsor_Medium({ name, image }: SponsorItem): ReactNode {
  const hasValidImage = isValidImage(image);
  const [imgError, setImgError] = useState(false);
  const style = SPONSOR_STYLE.medium;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 1,
        padding: 1.5,
        textAlign: "center",
        maxWidth: "40%",
      }}
    >
      {hasValidImage && !imgError
        ? (
            <img
              src={image}
              alt={name}
              style={{
                maxWidth: "100%",
                maxHeight: "150px",
                objectFit: "contain",
              }}
              onError={() => setImgError(true)}
            />
          )
        : (
            <Typography
              variant={style.variant}
              component="div"
              sx={{
                fontWeight: "bold",
                color: "#333",
                lineHeight: 1.2,
              }}
            >
              {name}
            </Typography>
          )}
    </Box>
  );
}

function Sponsor_Small({ name, image }: SponsorItem): ReactNode {
  const hasValidImage = isValidImage(image);
  const [imgError, setImgError] = useState(false);
  const style = SPONSOR_STYLE.small;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0.5,
        padding: 1,
        maxWidth: "30%",
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
                maxHeight: "100px",
                objectFit: "contain",
              }}
              onError={() => setImgError(true)}
            />
          )
        : (
            <Typography
              variant={style.variant}
              component="div"
              sx={{
                fontWeight: "bold",
                color: "#333",
                lineHeight: 1.2,
              }}
            >
              {name}
            </Typography>
          )}
    </Box>
  );
}

// 五十音順でソートする関数
function sortByJapaneseName(sponsors: SponsorItem[]): SponsorItem[] {
  return [...sponsors].sort((a, b) => a.name.localeCompare(b.name, "ja"));
}

function Sponsor(props: SponsorComponentProps): ReactNode {
  const { sponsors } = props;

  // サイズ別にグループ化
  const largeSponsors = sortByJapaneseName(sponsors.filter(s => s.size === "large"));
  const mediumSponsors = sortByJapaneseName(sponsors.filter(s => s.size === "medium"));
  const smallSponsors = sortByJapaneseName(sponsors.filter(s => s.size === "small"));

  return (
    <Box sx={{ mt: 10 }}>
      {/* Largeサイズのスポンサー */}
      {largeSponsors.length > 0 && (
        <Box sx={{ mb: 20 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "80%",
              margin: "0 auto",
            }}
          >
            {largeSponsors.map(sponsor => (
              <Sponsor_Large key={`large-${sponsor.name}`} {...sponsor} />
            ))}
          </Box>
        </Box>
      )}

      {/* Mediumサイズのスポンサー */}
      {mediumSponsors.length > 0 && (
        <Box sx={{ mb: 20 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              width: "80%",
              margin: "0 auto",
              gap: 0,
            }}
          >
            {mediumSponsors.map(sponsor => (
              <Sponsor_Medium key={`medium-${sponsor.name}`} {...sponsor} />
            ))}
          </Box>
        </Box>
      )}

      {/* Smallサイズのスポンサー */}
      {smallSponsors.length > 0 && (
        <Box sx={{ mb: 20 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              width: "80%",
              margin: "0 auto",
              gap: 0,
            }}
          >
            {smallSponsors.map(sponsor => (
              <Sponsor_Small key={`small-${sponsor.name}`} {...sponsor} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Sponsor;
