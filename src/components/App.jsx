import { useState, useEffect, React } from 'react';
import axios from 'axios';
import Feed from './Feed/Feed';
import Loader from './Loader/Loader';
import Navbar from './Navbar/Navbar';

import './App.scss';

export default function App() {
  const [count, setCount] = useState(25);
  const [apodList, setApodList] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `https://api.nasa.gov/planetary/apod?&count=${count}&api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log('response INSIDE', response);
        setApodList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There is an error right here', error);
      });
  }, [count]);

  const handleChange = (event) => {
    const value = Number(event.target.value);

    if (value && typeof value === 'number') {
      setCount(value);
      setLoading(true);
    } else {
      console.error('please add a valid number');
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="count-question">
        <p className="count-question-text">Please choose the amount of posts to render:</p>
        <input aria-label="post-count" placeholder="25" type="text" className="feed-count" onChange={handleChange} />
      </div>
      <hr />
      {loading && <Loader />}
      {!loading && <Feed apodList={apodList} count={count} />}
    </div>
  );
}
