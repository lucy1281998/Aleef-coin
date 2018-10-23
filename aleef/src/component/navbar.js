import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import "../style/navbar.css"
class Navbar extends Component
{
	render()
	{
		return(

<nav className="navbar navbar-expand-md py-0   fixed-top">
<div className="container-fluid">


  <NavLink className="navbar-brand" to="/home.js">
  <img src={require('../asset/aleef.png')}/>
  </NavLink>
 
  <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="nav navbar-nav navbar-right ml-auto">
    <li className="nav-item">
        <NavLink className="nav-Link" to="/">HOME</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-Link" to="/About">ABOUT US</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-Link" to="/contact.js">ICO/REFERRAL</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-Link" to="/share.js">WHITE PAPER</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-Link" to="/share.js">ROAD MAP</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-Link" to="/share.js">TEAM</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-Link" to="/share.js">FEATURES</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-Link" to="/share.js">WALLET</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-Link" to="/Home">CONTACT US</NavLink>
      </li>  
      <li className="nav-item">
        <NavLink className="nav-Link" to="/Signup">LOGIN</NavLink>
      </li> 
    </ul>
    </div>

  </div> 
</nav>


			);
	}
}

export default Navbar