import { useState, useEffect, React } from 'react';
import axios from 'axios';
import Feed from './Feed';
import Loader from './Loader';
import Navbar from './Navbar';

import './App.scss';

export default function App() {
  const [count, setCount] = useState(25);
  const [APODlist, setAPODlist] = useState([]);
  const [LOADING, setLOADING] = useState(true);

  const url = `https://api.nasa.gov/planetary/apod?&count=${count}&api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log('response INSIDE', response);
        setAPODlist(response.data);
        setLOADING(false);
      })
      .catch((error) => {
        console.error('There is an error right here', error);
      });
  }, [count]);

  const handleChange = (event) => {
    const value = Number(event.target.value);

    if (value && typeof value === 'number') {
      setCount(value);
      setLOADING(true);
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
      {LOADING && <Loader />}
      {!LOADING && <Feed APODlist={APODlist} count={count} />}
    </div>
  );
}
