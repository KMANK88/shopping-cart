import React from 'react';
import Faker from 'faker';
import Layout from '../../Layout';

class StoreContainer extends React.Component {

  state = {
    title: 'Products',
    products: undefined,
    cart: [],
    user: null,
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
    this.setState({ products: tempProducts, user: this.createUser() })
  }

  addToCart = (product) => {
    let tempCart = this.state.cart;
    tempCart.push(product);
    this.setState({ cart: tempCart });
  }

/* Create a function that removes a product from the cart */
  removeFromCart = (product) => {
    
  }

  createUser= () => {
    const user = {
      fName: Faker.name.firstName(),
      lName: Faker.name.lastName(),
      email: Faker.internet.email(),
      avatar: Faker.internet.avatar()
    }
    return user;
  }

  render () {
    let totalPrice = 0;
    for(let i=0; i< this.state.cart.length; i++){
      totalPrice+= parseFloat(this.state.cart[i].price);
    }
    return (
      <div>
        <store title={ this.state.title } />
        {
          this.state.products
          ? <Layout
          products={ this.state.products }
          addToCart={ this.addToCart }
          cart = { this.state.cart }
          totalPrice={totalPrice.toFixed(2)}
          user={this.state.user}

          />
          : <h1>Products Loading</h1>
        }
      </div>
    )

  }

}

export default StoreContainer;
