import React from 'react';
import { NavBar } from '../../components';

class NavBarContainer extends React.Component {

  state = {
    title: 'Shop Title',
    navBarLinks: ["Home", "About" , "Shop"]
  }

    render() {
      return (
        <NavBar title={ this.state.title } navBarLinks={ this.state.navBarLinks } cartCount={ this.props.cartCount }/>
      )
    }
}

export default NavBarContainer;
