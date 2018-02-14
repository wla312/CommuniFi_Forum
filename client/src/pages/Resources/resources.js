import React from "react";
import { Link, Route } from "react-router-dom";
import "./resources.css"
import Navbar from "../../components/Navbar";

const Resources = props =>
  <div>
  <Navbar location={'resources'} />
    <div id="resourcesHeader">
      <h1>Resources</h1>
    </div>

    <div class="container">

      <div class="row resourceBorder">
      
        <div class="col-md-12">
          <ul>
            <li>
              <div class= "resourcesPage">
                <p>
                  <h2>FORGET COMCAST. HERE’S THE DIY APPROACH TO INTERNET ACCESS</h2>
                  <a href="https://www.wired.com/2016/07/forget-comcast-heres-the-diy-approach-to-internet-access/"></a>
                </p>
              </div>
            </li>
            <li>
              <div class= "resourcesPage">
                <p>
                  <a href="https://arstechnica.com/tech-policy/2014/02/isp-lobby-has-already-won-limits-on-public-broadband-in-20-states/">ISP lobby has already won limits on public broadband in 20 states</a>
                </p>
              </div>
            </li>
            <li>
              <div class= "resourcesPage">
                <p>
                  <a href="https://arstechnica.com/tech-policy/2014/02/isp-lobby-has-already-won-limits-on-public-broadband-in-20-states/">ISP lobby has already won limits on public broadband in 20 states</a>
                </p>
              </div>
            </li>
            <li>
              <div class= "resourcesPage">
                <p>
                  <a href="https://arstechnica.com/tech-policy/2014/02/isp-lobby-has-already-won-limits-on-public-broadband-in-20-states/">ISP lobby has already won limits on public broadband in 20 states</a>
                </p>
              </div>
            </li>
          </ul>
         </div>                 
        </div>
    </div>



  </div>;

export default Resources;
