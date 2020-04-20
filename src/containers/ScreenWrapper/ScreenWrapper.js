import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import './ScreenWrapper.css';

class ScreenWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false
    }
  }

  openSideDrawer = () => {
    this.setState({ showSideDrawer: true });
  }

  closeSideDrawer = () => {
    this.setState({ showSideDrawer: false });
  }

  render() {
    const { showSideDrawer } = this.state;
    return (
      <div>
        <SideDrawer
          close={this.closeSideDrawer}
          show={showSideDrawer}
        />
        <Header
          openSideDrawer={this.openSideDrawer}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default ScreenWrapper;