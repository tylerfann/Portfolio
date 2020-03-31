import React from 'react';
import { Link } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <nav className='nav-links'>
      <ul>
        <li><Link to='/' onClick={props.closeSideDrawer}>Home</Link></li>
        <li><Link to='/resume' onClick={props.closeSideDrawer}>Resume</Link></li>
        {/* <li><a href="/">Projects</a></li>
    <li><a href="/">Social</a></li>
    <li><a href="/">Email</a></li> */}
      </ul>
    </nav>
  );
}

export default NavLinks;