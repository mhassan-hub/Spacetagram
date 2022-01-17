import React from 'react';
import LikeButton from '../LikeButton/LikeButton';
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
        <p className="image-explanation">{explanation}</p>
        <div className="card-footer">
          <LikeButton url={url} className="copy-link" />
          <LikeButton likeButton={true} className="like-button" />
        </div>
      </div>
    </div>
  );
}