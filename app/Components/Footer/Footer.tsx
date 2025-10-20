import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";
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
      width: "stretch",
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
          width: "100%",
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
      sx={{
        display: "flex",
        backgroundImage: "url(/images/nasa_lunar.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: { xs: "60px 15px 15px", sm: "80px 20px 20px", md: "100px 20px 20px" },
        borderRadius: "50% 50% 0 0",
        transform: { xs: "scaleX(1.2)", sm: "scaleX(1.3)", md: "scaleX(1.5)" },
        transformOrigin: "center top",
        position: "relative",
        zIndex: 1,
      }}
    >
      {siteMap.length > 0 && (
        <Box
          sx={{
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "flex-start",
            "gap": { xs: "20px", sm: "30px", md: "40px" },
            "flexWrap": "wrap",
            "width": "100%",
            "maxWidth": "1200px",
            "transform": { xs: "scaleX(0.83)", sm: "scaleX(0.77)", md: "scaleX(0.67)" }, // 逆変換
            "transformOrigin": "center center",
            "@media (max-width: 768px)": {
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
                      width: "stretch",
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
          padding: { xs: "15px 0", sm: "20px 0" },
          marginTop: { xs: "20px", sm: "25px", md: "30px" },
          color: "white",
          transform: { xs: "scaleX(0.83)", sm: "scaleX(0.77)", md: "scaleX(0.67)" }, // 逆変換
          transformOrigin: "center center",
          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
        }}
      >
        {ja.footer.copyright}
      </Box>
    </Box>
  );
}

export default Footer;
