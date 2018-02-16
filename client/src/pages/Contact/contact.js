import React from "react";
import { Link, Route } from "react-router-dom";
import "./contact.css";
// import Navbar from "../../components/Navbar";

const Contact = props =>
  <div>
  {/*<Navbar location={'contact'} />*/}
    <div class="container">

      <div class="row">
        <div class="col-md-8">
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
        
        <div id="sidePanel" class="col-md-4">
          <div>
              <p>
                Found a Mistake?
              </p>
              <p>
                Have any Suggestions?
              </p>
              <p>
                Have any Questions?
              </p>
              <p>
                Or leave a nice Comment!!
              </p>
              <p>
              The Team
              Will - https://github.com/wla312
              John - https://github.com/JohnHillgard
              Lio - https://github.com/liotovar
              Peter - https://github.com/plee1467
              </p>              
          </div>
        </div>
        
    </div>
    </div>
  </div>;

export default Contact;
