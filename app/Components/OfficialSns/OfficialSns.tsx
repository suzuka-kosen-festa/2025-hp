import type { ReactNode } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { IconButton, Stack } from "@mui/material";

interface OfficialSnsProps {
  xUrl?: string
  instagramUrl?: string
  facebookUrl?: string
}

function OfficialSns({
  xUrl = "https://x.com/KOSENFESTA",
  instagramUrl = "https://www.instagram.com/kosenfesta/",
  facebookUrl = "https://www.facebook.com/profile.php?id=61556514660247",
}: OfficialSnsProps): ReactNode {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        aria-label="X"
        href={xUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "white" }}
      >
        <XIcon />
      </IconButton>
      <IconButton
        aria-label="Instagram"
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "white" }}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        aria-label="Facebook"
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "white" }}
      >
        <FacebookIcon />
      </IconButton>
    </Stack>
  );
}

export default OfficialSns;
