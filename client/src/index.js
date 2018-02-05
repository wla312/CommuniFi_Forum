import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// adding registerServiceWorker to see if it solves deployment issue...
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();