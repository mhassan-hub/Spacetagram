import { useState, useEffect, React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Feed from './Feed/Feed';
import Loader from './Loader/Loader';
import Navbar from './Navbar/Navbar';
import likedPosts from '../helpers/helpers';

import './App.scss';

export default function App() {
  const [count, setCount] = useState(10);
  const [apodList, setApodList] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `https://api.nasa.gov/planetary/apod?&count=${count}&api_key=${process.env.REACT_APP_API_KEY}`;
  console.log(likedPosts())
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setApodList(response.data);
        setLoading(false);
        console.log('------', apodList)
      })
      .catch((error) => {
        console.error('There is an error right here', error);
      });
  }, [count]);

  const handleChange = (event) => {
    const value = Number(event.target.value);
    setCount(value);
    setLoading(true);
  };

  return (
    <Router>

      <div className="App" aria-label="main">
        <Navbar data-testid="nav" aria-label="nav" />
        <div className="count-question">
          <label className="count-label">
            Number of posts:
          <select value={count} className="feed-count" onChange={handleChange} aria-label="post number">
              <option value="10" aria-label="10">10</option>
              <option value="25" aria-label="25">25</option>
              <option value="50" aria-label="50">50</option>
            </select>
          </label>
        </div>
        <Switch>
          <Route exact path="/" >

            {loading && <Loader />}
            {!loading && <Feed aria-label="main-feed" apodList={apodList} />}

          </Route>
          <Route exact path="/likes">
            <Feed aria-label="main-feed" apodList={likedPosts()} /></Route>
        </Switch>
      </div>
    </Router>
  );
}
