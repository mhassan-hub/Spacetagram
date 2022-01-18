import React, { useState } from 'react';
import './Text.scss';

export default function Text({ text }) {
  const [readMore, setReadMore] = useState(true);
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <p className="explanation">
      {readMore ? text.slice(0, 520) + ' ' : text}
      <span aria-label="Read More or less text" onClick={toggleReadMore} className="display-text">
        {readMore ? "...read more" : " show less"}
      </span>
    </p>
  );
}