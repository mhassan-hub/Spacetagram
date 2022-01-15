import ImageCard from "../components/ImageCard";

import './Feed.scss'
function Feed({ APODlist, count }) {
  console.log("OUTSIDE RESPONSE - INSIDE FEED COMPONENT", APODlist);

  const list = APODlist.map((element, index) => {
    return <ImageCard key={index} date={element.date} title={element.title} url={element.url} explanation={element.explanation} />;
  })

  return (
    <ul className="home-feed">
      {list}
    </ul>
  );
}

export default Feed;
