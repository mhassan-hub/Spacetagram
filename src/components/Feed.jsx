import ImageCard from "../components/ImageCard";

function Feed({APODlist, count}) {
  console.log("OUTSIDE RESPONSE - INSIDE FEED COMPONENT", APODlist);

    const list = APODlist.map((element, index) => {
      return <ImageCard key={index} title={element.title} url={element.url} explanation={element.explanation}/>;
    })

  return (
    <div className="home-feed">
      <h1>{count}</h1>
      <p>list is being made</p>
        <ul>{list}</ul>
    </div>
  );
}

export default Feed;
