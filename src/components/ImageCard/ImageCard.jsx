import React, { useState } from 'react';
import './ImageCard.scss';

export default function ImageCard({ title, url, explanation, date }) {
  // const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  // let likedPost = {};

  const handleLike = (event) => {
    setLiked(!liked);
    console.log('Liked', liked);
  }

  // useEffect(() => {
  //   console.log('in the use effect');
  //   axios.post(
  //     process.env.AWS_POST_URL,
  //     { userid: `a`, likes: likes }
  //   )
  //     .then(response => {
  //       console.log(response.request.responseText);
  //     }).catch(error => console.log(error));
  // }, [likes])

  return (
    <div className="image-card">
      <img className="space-image" alt="" src={url} />
      <div className="image-card-info">
        <div className="title-section">
          <h2 className="title-text">
            {title}
          </h2>
          <p className="date">{date}</p>
        </div>
        <p className="image-explanation">{explanation}</p>
        <button
          type="submit"
          className="like-button"
          onClick={handleLike}
        >
          <i className="far fa-thumbs-up" />
          Like
        </button>
      </div>
    </div>
  );
}
