import React from "react";
import { Link, Route } from "react-router-dom";
import "./contact.css";
// import Navbar from "../../components/Navbar";

const Contact = props =>
<div>
  <div id="mainContainer" class="container">
    <div className="row frontHeader">
      <div className="col-md-12">
        <h2>Questions, Concerns, Comments? Let us know!</h2>
        <br />
      </div>
    </div>


    <div id="contactPage" className="row">
      <div className="col-md-1">
      </div>
      <div className="col-md-5">
        <h1>Contact Us</h1>
        <form action="https://formspree.io/cft1467@gmail.com" method="POST">
          <div className="row">
            <div className="form-group col-md-6">
              <label for="formGroup">Name</label>
              <input name="name" type="text" class="form-control" id="name" placeholder="Name"/> 
            </div>
            <div className="form-group col-md-6">
              <label for="formGroup">Email</label>
              <input name="_replyto" type="email" className="form-control" id="email" placeholder="Email"/>
            </div>
          </div>
          <div>
            <label for="formGroup">Message</label>
            <textarea name="message" type="text" className="form-control" rows="10"></textarea>
          </div>
          <input id="submitBtn" className="btn pull-right btn-default" type="submit" value="Send"/>
          <input type="hidden" name="_next" value="/contact" />
        </form>
      </div>

      <div className="col-md-1">
      </div>
        
      <div id="sidePanel" class="col-md-5">
        <div id="basicInfo">
            <h3>CommuniFi Team</h3>
            {/*<h4> <span className="glyphicon glyphicon-map-marker"></span>
                Chicago, IL
            </h4>
            <h4> <span className="glyphicon glyphicon-earphone"></span>
                (312)-xxx-xxx
            </h4>
            <h4><span className="glyphicon glyphicon-envelope"></span>
                info@communifi.com
            </h4>*/}
        </div>
        <div id="team">
          <h4>
            <span className="githubImg"><a href="https://github.com/JohnHillgard" target="_blank">{/*<img src="static/media/githubIcon.png"/>*/}Jack</a></span>
          </h4>
          <h4>
            <span className="githubImg"><a href="https://github.com/liotovar" target="_blank">{/*<img src="static/media/githubIcon.png"/>*/}Lio</a></span>
          </h4>
          <h4>
            <span className="githubImg"><a href="https://github.com/plee1467" target="_blank">{/*<img src="static/media/githubIcon.png"/>*/}Peter</a></span>
            
          </h4>
          <h4>
            <span className="githubImg"><a href="https://github.com/wla312" target="_blank">{/*<img src="static/media/githubIcon.png"/>*/}Will</a></span>
          </h4>
        </div>
      </div>
    </div>
  </div>
</div>;

export default Contact;
