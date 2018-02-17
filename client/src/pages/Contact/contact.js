import React from "react";
import { Link, Route } from "react-router-dom";
import "./contact.css";
import Navbar from "../../components/Navbar";

const Contact = props =>
  <div>
  <Navbar location={'contact'} />
    <div id="mainContainer" class="container">

    <div class="row frontHeader">
      <div class="col-md-12">
        <h1>Reach out to Us!</h1>
          <h2>Let us know how we can improve!
          </h2>
      </div>
    </div>


      <div id="contactPage" class="row">
        <div class="col-md-5">
          <h1>Contact Us</h1>
          <form>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="formGroup">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Name"/> 
              </div>
              <div class="form-group col-md-6">
                <label for="formGroup">Email</label>
                <input type="text" class="form-control" id="email" placeholder="Email"/>
              </div>
            </div>
            <div>
                <label for="formGroup">Message</label>
              <textarea class="form-control" rows="15"></textarea>
            </div>
          </form>

            <input id="submitBtn" class="btn pull-right btn-default" type="submit" value="Submit"/>
        </div>

        <div class="col-md-2">
        </div>
        
        <div id="sidePanel" class="col-md-5">
            <div id="basicInfo">
              <h3>
                CommuniFi
              </h3>
              <h4> <span class="glyphicons glyphicons-map-marker"></span>
                Chicago, IL
              </h4>
              <h4>
                (312)-xxx-xxx
              </h4>
              <h4>
                info@communifi.com
              </h4>
            </div>
            <div id="team">
              <h3>The Team
              </h3>
                <h4>Will - https://github.com/wla312
                </h4>
                <h4>John - https://github.com/JohnHillgard
                </h4>
                <h4>Lio - https://github.com/liotovar
                </h4>
                <h4>Peter - https://github.com/plee1467
                </h4>
            </div>
        </div>
        
    </div>
    </div>
  </div>;

export default Contact;
