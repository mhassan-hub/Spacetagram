import React from "react";

import "../components/ImageCard.scss";

export default function ImageCard(props) {
  const {title, url, explanation} = {props};
  return (
  <div className="image-card">
    <h2 className="card-title">
    {title}
    </h2>
    <img alt={title} src={url}></img>
    <p className="image-description">{explanation}</p>
    <button>Like</button>
  </div>);
}
