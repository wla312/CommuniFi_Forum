import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () =>

    <nav className="navbar bg-transparent">
        <a className="navbar-brand" href="/" >ISPyourself</a>

          <div className="dropdown pull-right">
            <span className="glyphicon glyphicon-menu-hamburger btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"></span>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="Login">Login</Link></li>
              <li><Link to="Resources">Resources</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
    </nav>


export default Navbar;