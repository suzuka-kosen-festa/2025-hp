import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import { ja } from "@/locales/ja";

interface SponsorComponentProps {
  name: string;
  image: string;
  url: string;
}

function Sponsor(props: SponsorComponentProps): ReactNode {
  return (
    <Box>
      <img src={props.image} alt={props.name} />
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        {props.name}
      </a>
    </Box>
  );
}

export default Sponsor;