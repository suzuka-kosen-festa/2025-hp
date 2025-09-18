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
  color: theme.palette.text.primary,
  fontSize: "1.2rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  writingMode: "vertical-rl",
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
    background: "black",
    borderRadius: "4px",
  },
  "&::after": {
    content: "\"\"",
    position: "absolute",
    bottom: "20px",
    left: "-6px",
    width: "12px",
    height: "12px",
    borderBottom: "2px solid black",
    borderRight: "2px solid black",
    transform: "rotate(45deg)",
  },
});

function Scroll(): ReactNode {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "20px",
        right: "20px",
      }}
    >
      <Scrolltext>Scroll</Scrolltext>
      <ScrollDown />
    </Box>
  );
}

export default Scroll;
