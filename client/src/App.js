import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Message from "./pages/Message";
// import Detail from "./pages/Detail";


const App = () =>
  <Router>
    <Wrapper>
      <Navbar />
      <Switch>
	      <Route exact path="/" component={Home} />
	      <Route exact path="/search" component={Search} />
	      {/*<Route exact path="/search/:zip" component={Detail} />*/}
	      {/*<Route exact path="/messageBoard" component={Message} />*/}
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resources" component={Resources} />
	      <Route exact path="/messageBoard/:zip" component={Message} />
      </Switch>
    </Wrapper>
  </Router>;

export default App;
