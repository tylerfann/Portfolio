import React from 'react';
import './Header.css';
import NavTabs from '../NavTabs/NavTabs';
import MenuIcon from '../../assets/images/hamburger-icon.svg';

const Header = (props) => {
  const { openSideDrawer } = props;

  return (
    <header className='header-container'>
      <NavTabs />
      <h1 className='header-logo'>TF</h1>
      <img src={MenuIcon} alt='menu icon' className='open-side-drawer-btn' onClick={openSideDrawer} />
    </header>
  );
}

export default Header;