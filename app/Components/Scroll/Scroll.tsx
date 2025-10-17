import type { ReactNode } from "react";
import { Box, keyframes, styled } from "@mui/material";

const scrolldown = keyframes`
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(10px);
  }
`;

const Scrolltext = styled("span")(({ theme }) => ({
  position: "absolute",
  bottom: "10px",
  left: "-40px",
  color: "white",
  fontSize: "1.2rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  writingMode: "vertical-rl",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    left: "-35px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.9rem",
    left: "-30px",
  },
}));

const ScrollDown = styled("div")({
  "position": "absolute",
  "bottom": 0,
  "left": "50%",
  "animation": `${scrolldown} 1.5s infinite`,
  "&::before": {
    content: "\"\"",
    position: "absolute",
    bottom: "30px",
    left: "-3px",
    width: "6px",
    height: "20px",
    background: "white",
    borderRadius: "4px",
  },
  "&::after": {
    content: "\"\"",
    position: "absolute",
    bottom: "20px",
    left: "-6px",
    width: "12px",
    height: "12px",
    borderBottom: "2px solid white",
    borderRight: "2px solid white",
    transform: "rotate(45deg)",
  },
});

function Scroll(): ReactNode {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: { xs: "15px", sm: "20px" },
        right: { xs: "15px", sm: "20px" },
      }}
    >
      <Scrolltext>Scroll</Scrolltext>
      <ScrollDown />
    </Box>
  );
}

export default Scroll;
