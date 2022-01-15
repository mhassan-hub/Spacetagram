import { useState, useEffect } from "react";
import axios from "axios";
import Feed from "./Feed";

import "./App.scss";
import Loader from "./Loader";
import Navbar from "./Navbar";

function App() {
  const [state, setState] = useState({
    count: 25,
    APODlist: [],
    LOADING: true
  });
  
  const url = `https://api.nasa.gov/planetary/apod?&count=${state.count}&api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {

    axios
      .get(url)
      .then((response) => {
        console.log("response INSIDE", response);
        setState({
          ...state,
          APODlist: response.data,
          LOADING: false,
        });
      })
      .catch((error) => {
        console.error("There is an error right here", error);
      });
  }, [state.count]);

  const handleChange = (event)=>{
    const value = Number(event.target.value);

    if (value && typeof value === 'number') {
      setState(()=>({...state, count: value, LOADING:true,
      }))
    } else {
      console.error('please add a valid number')
    }
  }

  console.log("TESTING AXIOS CALL", state);
  return (
    <div className="App">
      <Navbar/>
      <div className="count-question">
        <p className="count-question-text">Please choose the amount of posts to render:</p>
        <input aria-label='post-count' placeholder="25" type="text" className="feed-count" onChange={handleChange}/>
      </div>
      <hr></hr>
      {state.LOADING && <Loader/>}
      {!state.LOADING && <Feed APODlist={state.APODlist} count={state.count} />}
    </div>
  );
}

export default App;
