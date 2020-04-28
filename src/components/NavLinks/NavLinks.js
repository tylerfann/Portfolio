import React from 'react';
import { Link } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <nav className='nav-links-container'>
      <ul>
        <li className='nav-link-text'><Link to='/' onClick={props.closeSideDrawer} className='nav-link-text'>Home</Link></li>
        <li className='nav-link-text'><Link to='/resume' onClick={props.closeSideDrawer} className='nav-link-text'>Resume</Link></li>
      </ul>
    </nav>
  );
}

export default NavLinks;