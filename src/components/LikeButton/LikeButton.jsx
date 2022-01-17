import React, { useState } from "react";
import cn from "classnames";

import "./LikeButton.scss";

const LikeButton = ({ likeButton, url }) => {
  const [liked, setLiked] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setLiked(!liked);
    if (!likeButton) { navigator.clipboard.writeText(url) }
  }
  return (
    <button
      data-testid="like-button"
      aria-label="like-button"
      onClick={handleClick}
      onAnimationEnd={() => setClicked(false)}
      className={cn("like-button-wrapper", {
        liked,
        clicked,
      })}
    >
      {likeButton &&
        <div className="button-content">
          <i className="far fa-thumbs-up" />
          <span>Like</span>
          <span className={cn("suffix", { liked })}>d</span>
        </div>}
      {!likeButton &&
        <div className="button-content">
          <i className="far fa-copy"></i>
          <span>Copy URL</span>
        </div>}


    </button >
  );
};

export default LikeButton;