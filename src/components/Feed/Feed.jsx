import { React } from 'react';
import ImageCard from '../ImageCard/ImageCard';

import './Feed.scss';

export default function Feed({ apodList }) {

  const list = apodList.map((element, index) => {
    return (
      <ImageCard
        key={index}
        date={element.date}
        title={element.title}
        url={element.url}
        explanation={element.explanation}
      />
    );
  });

  return (
    <ul data-testid="image-card-list" className="home-feed">
      {list}
    </ul>
  );
}
