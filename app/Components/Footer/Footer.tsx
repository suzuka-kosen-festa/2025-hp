import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Link } from "@remix-run/react";
import { ja } from "@/locales/ja";

// サイトマップの型定義
export interface SiteMapLink {
  title: string
  href: string
}

export interface SiteMapSection {
  sectionTitle: string
  links: SiteMapLink[]
}

export interface FooterComponentProps {
  siteMap: SiteMapSection[]
}

// 個別のリンクコンポーネント
function FooterLink({ title, href }: SiteMapLink): ReactNode {
  return (
    <ListItemButton sx={{
      paddingTop: "4px",
      paddingBottom: "4px",
      height: "fit-content",
      alignSelf: "flex-start",
      minHeight: "32px",
    }}
    >
      <ListItemText
        primary="・"
        sx={{
          minWidth: "auto",
          marginRight: "4px",
        }}
      />
      <Link
        to={href}
        style={{
          lineHeight: "1.4",
          textDecoration: "none",
          color: "white",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.textDecoration = "underline";
          e.currentTarget.style.color = grey[400];
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.textDecoration = "none";
          e.currentTarget.style.color = "white";
        }}
      >
        {title}
      </Link>
    </ListItemButton>
  );
}

function Footer({ siteMap }: FooterComponentProps): ReactNode {
  return (
    <Box
      component="footer"
      bgcolor="black"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "40px 20px 20px",
      }}
    >
      {siteMap.length > 0 && (
        <Box
          sx={{
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "flex-start",
            "gap": "40px",
            "flexWrap": "wrap",
            "width": "100%",
            "maxWidth": "1200px",
            "@media (max-width: 768px)": {
              gap: "30px",
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          {siteMap.map(section => (
            <Box
              key={`${section.sectionTitle}`}
              sx={{
                display: "flex",
                minWidth: "160px",
                width: "fit-content",
                height: "fit-content",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
                overflow: "visible",
                padding: "0",
                color: "white",
                marginBottom: "20px",
              }}
            >
              <Typography
                sx={{
                  width: "100%",
                  fontWeight: "bold",
                  marginBottom: "8px",
                  paddingBottom: "4px",
                  borderBottom: "2px solid",
                  borderColor: "grey-50",
                }}
              >
                {section.sectionTitle}
              </Typography>
              <List
                sx={{
                  display: "flex",
                  width: "100%",
                  minWidth: "160px",
                  height: "fit-content",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "2px",
                  overflow: "visible",
                  padding: "0",
                }}
              >
                {section.links.map(link => (
                  <ListItem
                    key={`${link.title}`}
                    disablePadding
                    sx={{
                      width: "fit-content",
                    }}
                  >
                    <FooterLink title={link.title} href={link.href} />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "20px 0",
          marginTop: "30px",
          color: "white",
        }}
      >
        {ja.footer.copyright}
      </Box>
    </Box>
  );
}

export default Footer;
