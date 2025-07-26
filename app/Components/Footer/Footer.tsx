import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
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
  showCopyright?: boolean
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
          color: ja.fontColor,
        }}
      />
      <Link
        href={href}
        underline="hover"
        color={ja.fontColor}
        sx={{
          "fontSize": ja.footer.fontSize.linkText,
          "lineHeight": "1.4",
          "&:hover": {
            color: ja.accentColor,
          },
        }}
      >
        {title}
      </Link>
    </ListItemButton>
  );
}

function Footer({ siteMap, showCopyright = true }: FooterComponentProps): ReactNode {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "40px 20px 20px",
        backgroundColor: "#fafafa",
        borderTop: `1px solid ${ja.accentColor}`,
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
          {siteMap.map((section, index) => (
            <Box
              key={`${section.sectionTitle}-${index}`}
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
                marginBottom: "20px",
              }}
            >
              <Typography
                sx={{
                  width: "100%",
                  color: ja.fontColor,
                  fontWeight: "bold",
                  fontSize: ja.footer.fontSize.sectionTitle,
                  marginBottom: "8px",
                  paddingBottom: "4px",
                  borderBottom: `2px solid ${ja.accentColor}`,
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
                {section.links.map((link, linkIndex) => (
                  <ListItem
                    key={`${link.title}-${linkIndex}`}
                    disablePadding
                    sx={{ width: "fit-content" }}
                  >
                    <FooterLink title={link.title} href={link.href} />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      )}
      {showCopyright && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "20px 0",
            color: ja.fontColor,
            fontSize: ja.footer.fontSize.copyright,
            marginTop: "30px",
          }}
        >
          {ja.footer.copyright}
        </Box>
      )}
    </Box>
  );
}

export default Footer;
