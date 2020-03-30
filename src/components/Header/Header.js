import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
      <h1>Tyler Fann Portfolio</h1>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/resume'>Resume</Link></li>
          {/* <li><a href="/">Projects</a></li>
          <li><a href="/">Social</a></li>
          <li><a href="/">Email</a></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Header;