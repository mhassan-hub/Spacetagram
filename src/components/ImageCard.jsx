import React from "react";

import "../components/ImageCard.scss";

export default function ImageCard({title, url, explanation}) {

  return (
  <div className="image-card">
    <h2 className="card-title">
    {title}
    </h2>
    <img className="space-image" alt={title} src={url}></img>
    <p className="image-description">{explanation}</p>
    <button
      className="like-button"
    >Like</button>
  </div>);
}
