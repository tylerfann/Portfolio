import React from 'react';
import { Link } from 'react-router-dom';
import './NavTabs.css';

const NavTabs = (props) => {
  return (
    <nav className='nav-tabs-container'>
      <ul className='nav-tabs'>
        <li className='nav-tab'><Link to='/'>Home</Link></li>
        <li className='nav-tab'><Link to='/resume'>Resume</Link></li>
        {/* <li><a href="/">Projects</a></li>
    <li><a href="/">Social</a></li>
    <li><a href="/">Email</a></li> */}
      </ul>
    </nav>
  );
}

export default NavTabs;