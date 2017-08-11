import React from 'react';
import { NavBar } from '../../components';

class NavBarContainer extends React.Component {

  state = {
    title: 'Shop Title',
    navBarLinks: ["Profile","Home", "About" , "Shop"]
  }

    render() {
      return (
      <div>
        <NavBar title={ this.state.title } navBarLinks={ this.state.navBarLinks }
        cartCount={ this.props.cartCount } totalPrice={this.props.totalPrice}/>
      </div>
      )
    }
}

export default NavBarContainer;
