import { React } from 'react';
import ImageCard from '../ImageCard/ImageCard';

import './Feed.scss';

export default function Feed({ apodList }) {

  const list = apodList.map((element, index) => {
    return (
      <ImageCard
        key={index}
        cardInfo={element}
      />
    );
  });

  return (
    <ul data-testid="image-card-list" className="home-feed">
      {list}
    </ul>
  );
}
