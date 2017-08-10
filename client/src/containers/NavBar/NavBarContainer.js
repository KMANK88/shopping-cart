import React from 'react';
import { NavBar } from '../../components';

class NavBarContainer extends React.Component {

  state = {
    title: 'Shop Title',
    navBarLinks: ["Home", "About" , "Shop"]
  }

    render() {
      return (
      <div>
        <NavBar title={ this.state.title } navBarLinks={ this.state.navBarLinks } cartCount={ this.props.cartCount }/>
      </div>
      )
    }
}

export default NavBarContainer;
