import React from "react";

import "../components/ImageCard.scss";

export default function ImageCard({title, url, explanation, date}) {

  return (
  <div className="image-card">
    <img className="space-image" alt={title} src={url}></img>
    <div className="image-card-info">

    <h2 className="card-title">
    {title + ' - ' + date}
    </h2>
    <p className="image-description">{explanation}</p>
    <button
      className="like-button"
      >Like</button>
      </div>
  </div>);
}
