import React from 'react';
import NavLinks from '../NavLinks/NavLinks';
import './Header.css';

const Header = (props) => {
  const { openSideDrawer } = props;
  return (
    <div>
      <h1>Tyler Fann Portfolio</h1>
      <NavLinks />
      <button className='open-side-drawer-btn' onClick={openSideDrawer}>open side drawer</button>
    </div>
  );
}

export default Header;