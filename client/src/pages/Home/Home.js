import React from "react";
import Hero from "../../components/Hero";
// import Background from "../../images/lightpollution_heatmap.jpeg"
import { Link, Route } from "react-router-dom";
import Search from "../Search";
// import Navbar from "../../components/Navbar";
import "./home.css";


const Home = props =>
  <div id="homeDiv">
    <div className="jumbotron col-sm-12 text-center">
    <h1>What if you and your community could become your own internet service provider?</h1>
      {/*<p>"Just waiting around for corporate America to come save us, we realized no one is going to come out here and make the kind of investment that’s needed"</p>{/*https://arstechnica.com/information-technology/2015/11/how-a-group-of-neighbors-created-their-own-internet-service/*/}
      {/*<p>"CenturyLink service was supposed to provide up to 1.5Mbps downloads speeds, but in reality we “had 700kbps sometimes, and nothing at others"</p>
      <p>"The more competition, the better the service, faster the speeds, and lower the rates"</p>{/*https://cyber.harvard.edu/pubrelease/broadband/*/}
      {/*<p>"Community-owned internet service providers are better and cheaper"</p>{/*https://motherboard.vice.com/en_us/article/d345pv/harvard-study-shows-why-big-telecom-is-terrified-of-community-run-broadband*/}
      {/*often organized 
        as so-called “mesh networks” for their weblike, decentralized design, in which each node – a phone, 
        for instance, or a sophisticated wireless router–relays the connection onwards to the next node. https://www.fastcompany.com/3044686/mesh-networks-and-the-local-internet-movement*/}
    </div>
    <div className="col-sm-12" id="innerHomeDiv">
      <div className="col-sm-6 text-center" id="innerImageDiv">
      </div>
      <div className="col-sm-6 text-center" id="homePageText">
        {/*<h2>What if you and your community could become your own internet service provider?</h2>
        <br/>*/}
        <h2>Using affordable, off-the-shelf hardware and open-source software, hundreds of communities 
        around the world are assembling small, independent, nonprofit wireless networks. 
        </h2>
        {/*<br/>
        <h4>But in the U.S., we’ve collectively decided that it’s impossible to create a community owned,
         operated, and led service of any serious scale — that most of us need a corporate behemoth like Comcast or Verizon for our connections. 
         To make matters worse, the Federal Communications Commission went ahead with its deeply unpopular plan to end net neutrality protections, 
        giving those same corporate-behemoth internet service providers like AT&T, Verizon, and Comcast unprecedented control of our experience online.  
        </h4>
        <br/>
        <h4>However, all is not lost. In the short time since the FCC’s net neutrality ruling, interest in community-run ISPs has grown rapidly. 
        What if we could encourage community networks to flourish, AND, create a platform for user-run networks to collaborate and ultimately connect to one another?
        </h4>{/*https://www.inverse.com/article/39507-mesh-networks-net-neutrality-fcc*/}
        <br/>
        <Link to={`${props.match.url}search`} className="btn btn-default">
          Get Involved
        </Link> {" "}
        <Route exact path={`${props.match.url}search`} component={Search} />
        <a href="/api/google">Login</a>
      </div>
    </div>
  </div>;

export default Home;
