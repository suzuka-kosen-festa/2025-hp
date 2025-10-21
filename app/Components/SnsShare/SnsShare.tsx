import type { FC } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";

export const SnsShare: FC = () => {
  const url = "https://snct-fes.info";
  const hashtag = "%23%E9%88%B4%E9%B9%BF%E9%AB%98%E5%B0%82%20%23%E9%AB%98%E5%B0%82%E7%A5%AD%20%23KOSENFESTA%20%23ORBIT";
  const xUrl = `https://twitter.com/intent/tweet?text=@KOSENFESTA%0A高専祭は11月1日、2日！！%0A${url}%0A${hashtag}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <Box sx={{
      display: "flex",
      gap: { xs: 1, sm: 2 },
      flexWrap: "wrap",
      justifyContent: "center",
    }}
    >
      <IconButton
        href={`${xUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        sx={{
          "color": "white",
          "fontSize": { xs: "1.5rem", sm: "2rem" },
          "&:hover": { transform: "scale(1.1)" },
          "transition": "transform 0.2s ease",
        }}
      >
        <XIcon />
      </IconButton>
      <IconButton
        href={`${facebookUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        sx={{
          "color": "white",
          "fontSize": { xs: "1.5rem", sm: "2rem" },
          "&:hover": { transform: "scale(1.1)" },
          "transition": "transform 0.2s ease",
        }}
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        onClick={handleCopy}
        aria-label="Copy URL"
        sx={{
          "color": "white",
          "fontSize": { xs: "1.5rem", sm: "2rem" },
          "&:hover": { transform: "scale(1.1)" },
          "transition": "transform 0.2s ease",
        }}
      >
        {copied ? <CheckIcon /> : <ContentCopyIcon />}
      </IconButton>
    </Box>
  );
};
