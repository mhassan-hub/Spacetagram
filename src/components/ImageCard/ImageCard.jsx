import React, { useState } from 'react';
import AnimatedButton from '../AnimatedButton/AnimatedButton';
import Text from '../Text/Text'
import './ImageCard.scss';

export default function ImageCard({ cardInfo }) {
  const [showCopyBanner, setShowCopyBanner] = useState(false);

  return (
    <div data-testid="image-card" className="image-card" aria-label="image card">
      <img className="space-image" alt="" src={cardInfo.url} />
      <div className="image-card-info">
        <div className="title-section">
          <h2 className="title-text">
            {cardInfo.title}
          </h2>
          <p className="date">{cardInfo.date}</p>
        </div>
        <Text text={cardInfo.explanation} />
        <div className="card-footer">
          <AnimatedButton aria-label="Copy Link Button" className="copy-link" setShowCopyBanner={setShowCopyBanner} url={cardInfo.url} />
          <AnimatedButton aria-label="Like Button" className="like-button" likeButton={true} cardInfo={cardInfo} />
        </div>
        {showCopyBanner && <div className="copy-banner">
          <p className="copy-banner-text">Link has been copied successfully!</p>
        </div>}
      </div>
    </div>
  );
}