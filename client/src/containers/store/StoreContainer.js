import React from 'react';
import Faker from 'faker';
import Layout from '../../Layout';

class StoreContainer extends React.Component {

  state = {
    title: 'Products',
    products: undefined,
    cart: []
  }
  componentDidMount() {
    let tempProducts = [];
    for (var i = 0; i < 10; i++) {
      let prod = {
        name: Faker.commerce.productName(),
        price: Faker.commerce.price(),
        image: Faker.image.image(),
        id: i
      }
      tempProducts.push(prod)
    }

    //i had to pass a callback function to setState because otherwise
    this.setState({ products: tempProducts })
  }

  addToCart = (product) => {
    let tempCart = this.state.cart;
    tempCart.push(product);
    this.setState({ cart: tempCart });
    alert(`${product.name} was added to cart`)
  }

/* Create a function that removes a product from the cart */
  removeFromCart = (product) => {
    let tempCart = this.state.cart;
  }

  render () {
    console.log("Cart length: ", this.state.cart.length )
    return (
      <div>
        <store title={ this.state.title } />
        {
          this.state.products
          ? <Layout
          products={ this.state.products }
          addToCart={ this.addToCart }
          cart = { this.state.cart }
          />
          : <h1>Products Loading</h1>
        }
      </div>
    )

  }

}

export default StoreContainer;
