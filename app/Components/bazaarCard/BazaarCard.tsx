/** @jsxImportSource @emotion/react */

import type { ReactNode } from "react";

import { css } from "@emotion/react";

interface BazaarComponentProps {

  image: string

  teamName: string

  bazaarName: string

  description: string

}

const bazaarCard = css({

  display: "flex",

  flexDirection: "column",

  borderRadius: "12px",

  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",

  overflow: "hidden",

  backgroundColor: "#ffffff",

  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",

  maxWidth: "320px",

  height: "350px",

});

const imageContainer = css({

  width: "100%",

  height: "200px",

  overflow: "hidden",

  padding: "10px",

});

const cardImage = css({

  width: "100%",

  height: "100%",

  objectFit: "cover",

});

const cardContent = css({

  padding: "16px",

});

const titleFrame = css({

  display: "flex",

  alignItems: "center",

  gap: "8px",

  marginBottom: "12px",

});

const bazaarTitle = css({

  fontWeight: "bold",

  color: "#333",

  margin: 0,

});

const teamTitle = css({

  fontWeight: "bold",

  color: "#666",

  margin: 0,

});

const separator = css({

  color: "#999",

  fontSize: "16px",

});

const description = css({

  fontSize: "14px",

  color: "#555",

  lineHeight: "1.5",

  margin: 0,

  wordBreak: "break-word",

  height: "63px",

  overflow: "hidden",

  textOverflow: "ellipsis",

});

function BazaarCard(props: BazaarComponentProps): ReactNode {
  const { image, teamName, bazaarName, description: desc } = props;

  // 説明文の文字数制限（10文字以上50文字以下）

  const truncatedDescription = desc.length > 50 ? `${desc.slice(0, 50)}...` : desc;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/images/not-found.png";
  };

  return (

    <div css={bazaarCard}>

      <div css={imageContainer}>

        <img

          css={cardImage}

          src={image}

          alt={`${bazaarName}のイメージ`}

          loading="lazy"

          onError={handleImageError}

        />

      </div>

      <div css={cardContent}>

        <div css={titleFrame}>

          <h4 css={bazaarTitle}>{bazaarName}</h4>

          <span css={separator}>-</span>

          <h4 css={teamTitle}>{teamName}</h4>

        </div>

        <p css={description}>{truncatedDescription}</p>

      </div>

    </div>

  );
}

export default BazaarCard;
