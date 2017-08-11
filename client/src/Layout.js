import React, { Component } from 'react';
import { HomeContainer, AboutContainer,NavBarContainer} from './containers';
import { ShoppingCart, Cart, Profile } from './components'
import { Route, Switch } from 'react-router-dom';


class Layout extends Component {

  render() {
    return (
        <div>
          <NavBarContainer cartCount={ this.props.cart.length } totalPrice={this.props.totalPrice}/>
          <Switch>
            <Route exact path='/' component={ HomeContainer } />
            <Route path='/About' component={ AboutContainer } />
            <Route path='/Shop' render={() => <ShoppingCart products={ this.props.products } addToCart={ this.props.addToCart } /> } />
            <Route path='/Cart' render={() => <Cart cart={this.props.cart} totalPrice={this.props.totalPrice}/>} />
            <Route path='/Profile' render={()=> <Profile user={this.props.user} /> } />
          </Switch>
        </div>
    );
  }
}

export default Layout;
