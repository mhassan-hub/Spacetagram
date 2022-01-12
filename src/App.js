import { useState, useEffect } from "react";
import axios from "axios";
import Feed from "./components/Feed";

import "./App.css";

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
  }, [state]);

  console.log("TESTING AXIOS CALL", state);
  return (
    <div className="App">
      <Feed APODlist={state.APODlist} count={state.count} />
    </div>
  );
}

export default App;
