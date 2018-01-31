import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li>
    {/*<li className={window.location.pathname === "/search" ? "active" : ""}>
    	<Link to="/search">Search</Link>
    </li>*/}
  </ul>;

export default Navpills;
