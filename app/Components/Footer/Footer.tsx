/** @jsxImportSource @emotion/react */
import type { ReactNode } from "react";
import { css } from "@emotion/react";
import { Link } from "@remix-run/react";
import { ja } from "@/locales/ja";

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
          <h4>{ja.footer.siteMap}</h4>
          <ul>
            <li>
              <Link to="/">{ja.footer.home}</Link>
            </li>
            <li>
              <Link to="/">{ja.footer.home}</Link>
            </li>
            <li>
              <Link to="/">{ja.footer.home}</Link>
            </li>
          </ul>
        </div>
        <div css={Frame}>
          <h4>{ja.footer.siteMap}</h4>
          <ul>
            <li>
              <Link to="/">{ja.footer.home}</Link>
            </li>
            <li>
              <Link to="/">{ja.footer.home}</Link>
            </li>
            <li>
              <Link to="/">{ja.footer.home}</Link>
            </li>
          </ul>
        </div>
      </div>
      <p>{ja.footer.copyright}</p>
    </div>
  );
}

export default Footer;
