import type { FC } from "react";
import ChatIcon from "@mui/icons-material/Chat"; // Using Chat as a placeholder for LINE
import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { IconButton } from "@mui/material";
import { useState } from "react";

export const SnsShare: FC = () => {
  const url = "https://kosenfes-2025.trap.show";
  const text = "高専祭2025 #高専祭2025";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div>
      <IconButton
        href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
      >
        <XIcon />
      </IconButton>
      <IconButton
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        href={`https://line.me/R/msg/text/?${text}%0A${url}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LINE"
      >
        <ChatIcon />
      </IconButton>
      <IconButton
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Instagram"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton onClick={handleCopy} aria-label="Copy URL">
        {copied ? <CheckIcon /> : <ContentCopyIcon />}
      </IconButton>
    </div>
  );
};
