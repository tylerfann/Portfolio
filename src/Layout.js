import React from 'react';
import { Route } from 'react-router-dom';
import ScreenWrapper from './containers/ScreenWrapper/ScreenWrapper';
import Home from './containers/Home/Home';
import Resume from './containers/Resume/Resume';

const Layout = (props) => {
  return (
    <ScreenWrapper>
      <Route path="/" exact component={Home} />
      <Route path="/resume" exact component={Resume} />
    </ScreenWrapper>
  );
}

export default Layout;