import { useState, useEffect } from "react";
import axios from "axios";
import Feed from "./Feed";

import "./App.scss";

function App() {
  const [state, setState] = useState({
    count: 25,
    APODlist: [],
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
        });
      })
      .catch((error) => {
        console.error("There is an error right here", error);
      });
  }, [state.count]);

  const handleChange = (event)=>{
    const value = Number(event.target.value);

    if (value && typeof value === 'number') {
      setState(()=>({...state, count: value
      }))
    } else {
      console.error('please add a valid number')
    }
  }

  console.log("TESTING AXIOS CALL", state);
  return (
    <div className="App">
      <h1 className="app-title">Spacetagram <i class="fas fa-space-shuttle"></i></h1>
      <div className="count-question">
      <p className="count-question">Please choose the amount of posts to render:</p>
      <input aria-label='Count' placeholder="25" type="text" className="feed-count" onChange={handleChange}/>
      </div>
      <hr></hr>
      <Feed APODlist={state.APODlist} count={state.count} />
    </div>
  );
}

export default App;
