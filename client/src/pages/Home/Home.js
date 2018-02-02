import React from "react";
import Hero from "../../components/Hero";
import Background from "../../images/lightpollution_heatmap.jpeg"
import { Link, Route } from "react-router-dom";
import Search from "../Search";

const Home = props =>
  <div>
    <Hero backgroundImage={ Background }>
      <h1>ISPyourself</h1>
      <Link to={`${props.match.url}search`} className="btn btn-default">
        Search Community-Led ISPs In Your Area
      </Link> {" "}
      <Route exact path={`${props.match.url}search`} component={Search} />
    </Hero>
    <div>
      <p>
        ISPyourself ISPyourself ISPyourself ISPyourself ISPyourself ISPyourself ISPyourself ISPyourself ISPyourself
      </p>
    </div>
  </div>;

export default Home;
