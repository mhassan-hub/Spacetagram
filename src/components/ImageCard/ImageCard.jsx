import React from 'react';
import AnimatedButton from '../AnimatedButton/AnimatedButton';
import Text from '../Text/Text'
import './ImageCard.scss';

export default function ImageCard({ title, url, explanation, date }) {

  return (
    <div className="image-card" aria-label="image card">
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
          <AnimatedButton aria-label="Copy Link Button" url={url} className="copy-link" />
          <AnimatedButton aria-label="Like Button" likeButton={true} className="like-button" />
        </div>
      </div>
    </div>
  );
}