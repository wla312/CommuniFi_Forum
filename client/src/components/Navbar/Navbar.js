import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Logo from "../../images/logo.png "


const Navbar = () => {

  // console.log('our porps for Navbar', props); 

  // let styleToApply;

  // const whiteStyle = {
  //   navbarBrand: {
  //     color: 'white'
  //   },
  //   navbar: {
  //     borderBottom: '1px solid white',
  //     borderRadius: '0px',
  //     zIndex: 2
  //   },
  //   dropdown: {
  //     paddingTop: '5px',
  //     color: 'white'
  //   },
  //   dropdownMenu: {
  //     backgroundColor: '#020120',
  //     color: 'white',
  //     border: '1px solid white'
  //   },
  //   dropdownMenuATags: {
  //     color: 'white'
  //   }
  // }

  // const blackStyle = {
  //   navbarBrand: {
  //     color: 'black'
  //   },
  //   navbar: {
  //     borderBottom: '1px solid black',
  //     borderRadius: '0px'
  //   },
  //   dropdownMenu: {
  //     backgroundColor: 'transparent',
  //     backgroundColor: 'white',
  //     color: 'black',
  //     border: '1px solid black'
  //   }, 
  //   dropdown: {
  //     paddingTop: '5px',
  //     color: 'black'
  //   },
  //   dropdownMenuATags: {
  //     color: 'black'
  //   }
  // }

  // if (props.location === 'home') {
  //   styleToApply = whiteStyle
  // } else {
  //   styleToApply = blackStyle
  // }

  return (
    <nav  className="navbar bg-transparent">{/*style={styleToApply.navbar}*/}
        <a  className="navbar-brand" href="/">CommuniFi{/*<img id="logo" src="static/media/logo.png"/>style={styleToApply.navbarBrand}*/}</a>
          <div  className="dropdown pull-right">{/*style={styleToApply.dropdown}*/}
            <span className="glyphicon glyphicon-menu-hamburger btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"></span>
            <ul  className="dropdown-menu" aria-labelledby="dropdownMenu1">{/*style={styleToApply.dropdownMenu}*/}
              <li><Link  to="/">Home</Link></li>{/*style={styleToApply.dropdownMenuATags}*/}
              <li><Link  to="/search">Search</Link></li>{/*style={styleToApply.dropdownMenuATags}*/}
              {/*<li><Link to="Login">Login</Link></li>style={styleToApply.dropdownMenuATags} */}
              <li><Link  to="Resources">Resources</Link></li>{/*style={styleToApply.dropdownMenuATags}*/}
              <li><Link to="/contact">Contact</Link></li>{/*style={styleToApply.dropdownMenuATags} */}
            </ul>
          </div>
    </nav>
  );
}

    

export default Navbar;