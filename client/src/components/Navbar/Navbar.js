import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Logo from "../../images/logo.png "


const Navbar = (props) => {

  console.log('our porps for Navbar', props); 

  let styleToApply;

  const whiteStyle = {
    navbarBrand: {
      color: 'white'
    },
    navbar: {
      borderBottom: '1px solid white',
      borderRadius: '0px',
      zIndex: 2
    },
    dropdown: {
      paddingTop: '5px',
      color: 'white'
    },
    dropdownMenu: {
      backgroundColor: '#020120',
      color: 'white',
      border: '1px solid white'
    },
    dropdownMenuATags: {
      color: 'white'
    }
  }

  const blackStyle = {
    navbarBrand: {
      color: 'black'
    },
    navbar: {
      borderBottom: '1px solid black',
      borderRadius: '0px'
    },
    dropdownMenu: {
      backgroundColor: 'transparent',
      backgroundColor: 'white',
      color: 'black',
      border: '1px solid black'
    }, 
    dropdown: {
      paddingTop: '5px',
      color: 'black'
    },
    dropdownMenuATags: {
      color: 'black'
    }
  }

  if (props.location === 'home') {
    styleToApply = whiteStyle
  } else {
    styleToApply = blackStyle
  }

  return (
    <nav style={styleToApply.navbar} className="navbar bg-transparent">
        <a style={styleToApply.navbarBrand} className="navbar-brand" href="/"><img id="logo" src="static/media/logo.png"/></a>
          <div style={styleToApply.dropdown} className="dropdown pull-right">
            <span className="glyphicon glyphicon-menu-hamburger btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"></span>
            <ul style={styleToApply.dropdownMenu} className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><Link style={styleToApply.dropdownMenuATags} to="/">Home</Link></li>
              <li><Link style={styleToApply.dropdownMenuATags} to="/search">Search</Link></li>
              <li><Link style={styleToApply.dropdownMenuATags} to="Login">Login</Link></li>
              <li><Link style={styleToApply.dropdownMenuATags} to="Resources">Resources</Link></li>
              <li><Link style={styleToApply.dropdownMenuATags} to="/contact">Contact</Link></li>
            </ul>
          </div>
    </nav>
  );
}

    

export default Navbar;