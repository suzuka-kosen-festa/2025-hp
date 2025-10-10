/** @jsxImportSource @emotion/react */
import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router";
import { ja } from "../../locales/ja";

export interface EventCardComponentProps {
  eventName: string
  description: string
  linkName: string
  href: string
  color: string
}

function EventCard(props: EventCardComponentProps): ReactNode {
  const { eventName, description, linkName, href, color } = props;
  const bgColor = `${color}33`;
  return (
    <Card sx={{ width: "320px", borderRadius: "16px", p: 1, border: `1px solid ${color}`, color, backgroundColor: bgColor }}>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "flex-start",
      }}
      >
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold", color: "white" }}>
            {ja.eventCard.name(eventName)}
          </Typography>
          <Typography variant="body2" sx={{ mb: 6, color: "white" }}>
            {description}
          </Typography>
          <Box sx={{ display: "flex", width: "stretch", justifyContent: "flex-end" }}>
            <Link to={href} style={{ textDecoration: "none", color: "white" }}>
              {" "}
              {`${linkName} >>`}
            </Link>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

export default EventCard;
