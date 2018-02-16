import React from "react";
import { Link, Route } from "react-router-dom";
import "./resources.css"
// import Navbar from "../../components/Navbar";

const Resources = props =>
  <div>
  {/*<Navbar location={'resources'} />*/}
    <div class="container">

      <div class="row resourceBorder">
        <div class="col-md-12">
          <h1>Resources</h1>

            <div class= "resourcesPage">
              <p>
                <a href="https://www.wired.com/2016/07/forget-comcast-heres-the-diy-approach-to-internet-access/">FORGET COMCAST. HERE’S THE DIY APPROACH TO INTERNET ACCESS</a>
              </p>
            </div>

            <div class= "resourcesPage">
              <p>
                <a href="https://arstechnica.com/tech-policy/2014/02/isp-lobby-has-already-won-limits-on-public-broadband-in-20-states/">ISP lobby has already won limits on public broadband in 20 states</a>
              </p>
            </div>

            <div class= "resourcesPage">
              <p>
                <a href="https://arstechnica.com/tech-policy/2014/02/isp-lobby-has-already-won-limits-on-public-broadband-in-20-states/">ISP lobby has already won limits on public broadband in 20 states</a>
              </p>
            </div>

            <div class= "resourcesPage">
              <p>
                <a href="https://arstechnica.com/tech-policy/2014/02/isp-lobby-has-already-won-limits-on-public-broadband-in-20-states/">ISP lobby has already won limits on public broadband in 20 states</a>
              </p>
            </div>

         </div>                 
        </div>
    </div>



  </div>;

export default Resources;
