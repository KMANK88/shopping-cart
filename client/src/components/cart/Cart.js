import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  return (
    <div>
      {
        props.cart.length > 0 ?
          props.cart.map((item, index) => (
            <CartItem item={ item } />
          ))
        : <h1> Empty Cart </h1>

      }
    </div>
  )
}

export default Cart;
