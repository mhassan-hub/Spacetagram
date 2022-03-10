import React, { useState } from "react";
import cn from "classnames";

import "./AnimatedButton.scss";

export default function AnimatedButton({ likeButton, setShowCopyBanner, cardInfo }) {
  const [liked, setLiked] = useState(null);
  const [clicked, setClicked] = useState(false);
  const buttonClassName = likeButton ? "like-button" : "copy-button";
  const testId = likeButton ? "like-button" : "copy-button";

  const handleClick = () => {
    setClicked(true);

    if (!likeButton) {
      navigator.clipboard.writeText(cardInfo.url)
      setShowCopyBanner(true);
      setTimeout(() => {
        setShowCopyBanner(false);
      }, 3000);
    }

    setLiked(!liked);
    if (!localStorage.getItem(cardInfo.title)) {
      return localStorage.setItem(cardInfo.title, JSON.stringify(cardInfo))
    }
    localStorage.removeItem(cardInfo.title)
  }

  return (
    <button
      data-testid={testId}
      onClick={handleClick}
      onAnimationEnd={() => setClicked(false)}
      className={cn(buttonClassName, {
        liked,
        clicked,
      })}
    >
      {likeButton &&
        <div aria-label="Like Button" className="button-content">
          <i className="far fa-thumbs-up" />
          <span>Like</span>
          <span className={cn("suffix", { liked })}>d</span>
        </div>}

      {!likeButton &&
        <div aria-label="Copy Link Button" className="button-content">
          <i className="far fa-copy"></i>
          <span>Copy URL</span>
        </div>}
    </button >
  );
}
