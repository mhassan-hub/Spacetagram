import { React } from 'react';
import ImageCard from '../ImageCard/ImageCard';

import './Feed.scss';

export default function Feed({ apodList }) {
  console.log('OUTSIDE RESPONSE - INSIDE FEED COMPONENT', apodList);

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
    <ul className="home-feed">
      {list}
    </ul>
  );
}
