import React from 'react';

const styles = {
  container: {
    backgroundColor: "red"
  },
  header: {
    fontSize: '30px'
  }
}

const CartItem = (props) => {
  return (
    <div style={ styles.container } >
      <h1 style={ styles.header } >{ props.item.name }</h1>
      <img alt="" src={ props.item.image } />
      <h3>Price: { props.item.price }</h3>
    </div>
  )
}

export default CartItem;
