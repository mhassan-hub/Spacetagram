import React, { useState } from 'react';
import AnimatedButton from '../AnimatedButton/AnimatedButton';
import Text from '../Text/Text'
import './ImageCard.scss';

export default function ImageCard({ title, url, explanation, date }) {
  const [showCopyBanner, setShowCopyBanner] = useState(false);

  return (
    <div data-testid="image-card" className="image-card" aria-label="image card">
      <img className="space-image" alt="" src={url} />
      <div className="image-card-info">
        <div className="title-section">
          <h2 className="title-text">
            {title}
          </h2>
          <p className="date">{date}</p>
        </div>
        <Text text={explanation} />
        <div className="card-footer">
          <AnimatedButton aria-label="Copy Link Button" className="copy-link" setShowCopyBanner={setShowCopyBanner} url={url} />
          <AnimatedButton aria-label="Like Button" className="like-button" title={title} likeButton={true} url={url} />
        </div>
        {showCopyBanner && <div className="copy-banner">
          <p className="copy-banner-text">Link has been copied successfully!</p>
        </div>}
      </div>
    </div>
  );
}