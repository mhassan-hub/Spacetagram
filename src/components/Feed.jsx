import { React } from 'react';
import ImageCard from './ImageCard';

import './Feed.scss';

export default function Feed({ APODlist }) {
  console.log('OUTSIDE RESPONSE - INSIDE FEED COMPONENT', APODlist);

  const list = APODlist.map((element, index) => {
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
