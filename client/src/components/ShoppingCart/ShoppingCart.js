import React from 'react';
//import Product from './Product';

const ShoppingCart = (props) => {

  return (

    <div className='productList'>
      {
        props.products.map((product, index) =>

          <div className='productCard' key={index}>
            <h3>{ product.name }</h3>
            <img  alt="" src={ product.image } />
            <p>{ product.price }</p>
            <button className='btn btn-default' onClick={() => props.addToCart(product) }>Add to Cart</button>
          </div>

        )
      }
    </div>

  )
}

export default ShoppingCart;
