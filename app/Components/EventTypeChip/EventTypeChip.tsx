import { Chip, styled } from "@mui/material";

export const EventTypeChip = styled(Chip)(({ theme }) => ({
  "fontWeight": "bold",
  "fontSize": "1.2rem",
  "padding": "0.5rem 1rem",
  "height": "auto",
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
    [theme.breakpoints.down("sm")]: {
      padding: "0.4rem 0.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.3rem 0.6rem",
    },
  },
}));
