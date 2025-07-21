/** @jsxImportSource @emotion/react */
import type { ReactNode } from "react";
import { css } from "@emotion/react";
import { Button as MUIButton } from "@mui/material";
import { Link } from "react-router";

interface FooterComponentProps {
}

const footer = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "40px",
});

const siteMapFrame = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
});

const Frame = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

function Footer(_: FooterComponentProps): ReactNode {
  return (
    <div css={footer}>
      <div css={siteMapFrame}>
        <div css={Frame}>
          <h4>Site Map</h4>
          <ul>
            <li>
              <a href="/">Home</a>
              {/* <Link to="/">Home</Link> */}
            </li>
            <li>
              <a href="/">Home</a>
              {/* <Link to="/">Home</Link> */}
            </li>
            <li>
              <a href="/">Home</a>
              {/* <Link to="/">Home</Link> */}
            </li>
          </ul>
        </div>
        <div css={Frame}>
          <h4>Site Map</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </div>
      <p>©2025 鈴鹿工業高等専門学校 高専祭実行委員会</p>
    </div>
  );
}

export default Footer;
