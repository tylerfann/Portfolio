import React from 'react';
import './SideDrawer.css';
import NavLinks from '../NavLinks/NavLinks';

const SideDrawer = (props) => {
  return (
    <div className='display'>
      <div className='side-drawer'>
        <NavLinks closeSideDrawer={props.closeSideDrawer}/>
      </div>
    </div>
  );
}

export default SideDrawer;