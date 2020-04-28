import React from 'react';
import './Header.css';
import NavTabs from '../NavTabs/NavTabs';
import MenuIcon from '../../assets/images/hamburger-icon.svg';

const Header = (props) => {
  const { openSideDrawer } = props;

  return (
    <header className='header-container'>
      <NavTabs />
      <p className='header-logo'>TF</p>
      <img src={MenuIcon} alt='menu icon' className='open-side-drawer-btn' onClick={openSideDrawer} />
    </header>
  );
}

export default Header;