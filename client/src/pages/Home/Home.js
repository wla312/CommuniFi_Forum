import React from "react";
import Hero from "../../components/Hero";
import Background from "../../images/lightpollution_heatmap.jpeg"
import { Link, Route } from "react-router-dom";
import Search from "../Search";
import Navbar from "../../components/Navbar";
import "./home.css";


const Home = props =>
  <div id="homeDiv">

    <Navbar location={'home'} />

      <Hero backgroundImage={ Background }>
        <h1>CommuniFi</h1>
        <Link to={`${props.match.url}search`} className="btn btn-default">
          Search Community-Led ISPs In Your Area
        </Link> {" "}
        <Route exact path={`${props.match.url}search`} component={Search} />
      </Hero>
    <div class='text' class="row">
          <div class="col-md-6">
          <img id="frontPage" src="static/media/frontPagePicture.png"/>
          </div>

      <div id="frontPageText" class="col-md-6">
        <h1>CommuniFi: The End of Your Lousy ISP</h1>
        <p>
          <h3> CommuniFi is a simple open-source peer to peer network that provides a platform for users around the community to connect with each other. </h3>
          <h3> User can either join into an existing group of CommuniFi network or create a new CommuniFi network around the area. </h3>
        </p>
      </div>
    </div>
  </div>;

export default Home;
