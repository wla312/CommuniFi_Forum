import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Home from "./components/pages/Home";


const App = () =>
  <Router>
    <div>
      <Navpills />
      <Route path="/" component={Home} />
    </div>
  </Router>;

export default App;
