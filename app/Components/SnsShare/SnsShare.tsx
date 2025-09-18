import type { FC } from "react";

export const SnsShare: FC = () => {
  const url = "https://kosenfes-2025.trap.show";
  const text = "高専祭2025 #高専祭2025";

  return (
    <div>
      <a
        href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        X
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <a
        href={`https://line.me/R/msg/text/?${text}%0A${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        LINE
      </a>
    </div>
  );
};
