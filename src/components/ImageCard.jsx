import React from "react";

import "../components/ImageCard.scss";

export default function ImageCard({title, url, explanation, date}) {

  return (
  <div className="image-card">
    <img className="space-image" alt="" src={url}></img>
    <div className="image-card-info">

    <div className="title-section">
      <h2 className="title-text">
      {title}
      </h2>
      <p className="date">{date}</p>
    </div>
    <p className="image-explanation">{explanation}</p>
    <button
      className="like-button"
      >Like</button>
      </div>
  </div>);
}
