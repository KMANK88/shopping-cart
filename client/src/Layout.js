import React, { Component } from 'react';
import { HomeContainer, AboutContainer,NavBarContainer} from './containers';
import { ShoppingCart, Cart, CartItem } from './components'
import { Route, Switch } from 'react-router-dom';


class Layout extends Component {

  render() {
    console.log("Layout from layout.js",  this.props.products );
    console.log("Cart Length from layout.js: ", this.props.cart.length );
    return (
        <div className="Nav-Bar">
          <NavBarContainer cartCount={ this.props.cart.length } />
          <Switch>
            <Route exact path='/' component={ HomeContainer } />
            <Route path='/About' component={ AboutContainer } />
            <Route path='/Shop' render={() => <ShoppingCart products={ this.props.products } addToCart={ this.props.addToCart } /> } />
            <Route path='/Cart' render={() => <Cart cart={this.props.cart}/>} />
          </Switch>
        </div>
    );
  }
}

export default Layout;
