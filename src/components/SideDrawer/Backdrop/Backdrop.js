import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './Backdrop.css';

const Backdrop = (props) => {
  const { close, show } = props;
  return (
    <CSSTransition
      in={show}
      timeout={300}
      classNames='backdrop'
      unmountOnExit
    >
      <div className='backdrop' onClick={close}></div>
    </CSSTransition>
  );
}

export default Backdrop;