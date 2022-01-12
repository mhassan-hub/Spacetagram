import logo from "./logo.svg";
import { useState, useEffect } from "react";
import axios from "axios";
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

  console.log("TESTING AXIOS CALL", state.APODlist);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
