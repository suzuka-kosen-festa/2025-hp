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
    <Card sx={{
      width: { xs: "100%", sm: "300px", md: "320px" },
      maxWidth: "320px",
      borderRadius: { xs: "12px", sm: "16px" },
      p: { xs: 0.5, sm: 1 },
      border: `1px solid ${color}`,
      color,
      backgroundColor: bgColor,
    }}
    >
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "flex-start",
      }}
      >
        <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            {ja.eventCard.name(eventName)}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: { xs: 4, sm: 6 },
              color: "white",
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
              lineHeight: { xs: 1.4, sm: 1.6 },
            }}
          >
            {description}
          </Typography>
          <Box sx={{ display: "flex", width: "stretch", justifyContent: "flex-end" }}>
            <Link
              to={href}
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "0.9rem",
              }}
            >
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
