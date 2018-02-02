import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () =>

    <nav className="navbar bg-transparent">
        <a className="navbar-brand" href="/" >ISPyourself</a>

          <div className="dropdown pull-right">
            <span className="glyphicon glyphicon-menu-hamburger btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"></span>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="/">Home</a></li>
              <li><a href="/search">Search</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
    </nav>


export default Navbar;
