import React from 'react';
import Faker from 'faker';
import { Store, ProductList } from '../../components';


class StoreContainer extends React.Component {

  state = {
    title: 'Hellow from Store Container!',
    products: null
  }

  componentWillMount() {
    this.fetchFakeProducts();
  }

  fetchFakeProducts = () => {
    const productsArray = [];

    for(let i = 0; i < 10; i +=1 ) {
      productsArray.push({
        name: Faker.commerce.productName(),
        price: Faker.commerce.price(),
        image: Faker.random.image()
      })
    }
    this.setState({ products: productsArray });
  }

  render () {

    return (
      <div>
        <Store title={ this.state.title } />
        <ProductList products={ this.state.products } />
      </div>
    )

  }

}

export default StoreContainer;
