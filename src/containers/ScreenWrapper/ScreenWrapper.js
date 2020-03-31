import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/SideDrawer/Backdrop/Backdrop';


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

    const sideDrawer = (
      <React.Fragment>
        <SideDrawer closeSideDrawer={this.closeSideDrawer} />
        <Backdrop closeSideDrawer={this.closeSideDrawer}/>
      </React.Fragment>
    );
    return (
      <div>
        <Header openSideDrawer={this.openSideDrawer} />
        {showSideDrawer && sideDrawer}
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default ScreenWrapper;