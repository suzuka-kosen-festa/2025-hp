import type { ReactNode } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { IconButton, Stack } from "@mui/material";

function OfficialSns(): ReactNode {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        aria-label="X"
        href="https://x.com/placeholder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <XIcon />
      </IconButton>
      <IconButton
        aria-label="Instagram"
        href="https://instagram.com/placeholder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        aria-label="Facebook"
        href="https://facebook.com/placeholder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </IconButton>
    </Stack>
  );
}

export default OfficialSns;
