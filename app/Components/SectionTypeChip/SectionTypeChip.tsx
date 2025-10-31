import { Chip, styled } from "@mui/material";

export const SectionTypeChip = styled(Chip)(({ theme }) => ({
  "fontWeight": "bold",
  "fontSize": "1.2rem",
  "padding": "0.5rem 1rem",
  "height": "auto",
  "background": "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
  "color": "white",
  "border": "2px solid #1a1a1a",
  "boxShadow": "0 0 15px rgba(74, 144, 226, 0.4)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    padding: "0.4rem 0.8rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.9rem",
    padding: "0.3rem 0.6rem",
  },
  "& .MuiChip-label": {
    padding: "0.5rem 1rem",
    textShadow: "0 0 5px rgba(255, 255, 255, 0.3)",
    [theme.breakpoints.down("sm")]: {
      padding: "0.4rem 0.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.3rem 0.6rem",
    },
  },
}));
