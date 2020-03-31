import React from 'react';
import NavLinks from '../NavLinks/NavLinks';
import './Header.css';

const Header = (props) => {
  return (
    <div>
      <h1>Tyler Fann Portfolio</h1>
      <NavLinks />
      <button className='open-side-drawer-btn' onClick={props.openSideDrawer}>open side drawer</button>
    </div>
  );
}

export default Header;