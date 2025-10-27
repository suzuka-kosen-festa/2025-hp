import type { FC } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ja } from "@/locales/ja";

const DonationButton = styled(Button)(({ theme }) => ({
  "background": "linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)",
  "color": "white",
  "fontWeight": "bold",
  "padding": theme.spacing(1.5, 4),
  "borderRadius": "25px",
  "fontSize": "1.1rem",
  "textTransform": "none",
  "boxShadow": "0 4px 15px rgba(255, 107, 107, 0.3)",
  "&:hover": {
    background: "linear-gradient(45deg, #FF5252 30%, #FF7043 90%)",
    boxShadow: "0 6px 20px rgba(255, 107, 107, 0.4)",
    transform: "translateY(-2px)",
  },
  "transition": "all 0.3s ease",
}));

const SponsorDonation: FC = () => {
  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, textAlign: "center" }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          color: "white",
          fontWeight: "bold",
          mb: 3,
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        {ja.sponsorDonation.title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "white",
          mb: 3,
          fontSize: { xs: "1rem", sm: "1.1rem" },
          lineHeight: 1.8,
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        {ja.sponsorDonation.description}
        <br />
        {ja.sponsorDonation.benefit}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "rgba(255, 255, 255, 0.95)",
          mb: 4,
          fontSize: { xs: "0.9rem", sm: "1rem" },
        }}
      >
        {ja.sponsorDonation.note}
      </Typography>

      <Link
        href="https://forms.gle/4TyeBZ2iVsNY9oKb8"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textDecoration: "none" }}
      >
        <DonationButton variant="contained" size="large">
          {ja.sponsorDonation.buttonText}
        </DonationButton>
      </Link>

      <Typography
        variant="caption"
        sx={{
          color: "rgba(255, 255, 255, 0.7)",
          display: "block",
          mt: 2,
          fontSize: { xs: "0.8rem", sm: "0.9rem" },
        }}
      >
        {ja.sponsorDonation.linkDescription}
      </Typography>
    </Box>
  );
};

export default SponsorDonation;
