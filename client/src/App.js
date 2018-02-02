import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";


const App = () =>
  <Router>
    <Wrapper>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
    </Wrapper>
  </Router>;

export default App;
