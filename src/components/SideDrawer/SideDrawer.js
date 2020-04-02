import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './SideDrawer.css';
import NavLinks from '../NavLinks/NavLinks';
import Backdrop from '../../components/SideDrawer/Backdrop/Backdrop';

const SideDrawer = (props) => {
  const { show, close } = props;
  return (
    <React.Fragment>
      <CSSTransition
        in={show}
        timeout={200}
        classNames='side-drawer'
        unmountOnExit
      >
        <div className='side-drawer'>
          <NavLinks closeSideDrawer={close} />
        </div>
      </CSSTransition>
      <Backdrop close={close} show={show} />
    </React.Fragment>
  );
}

export default SideDrawer;