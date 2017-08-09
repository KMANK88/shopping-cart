import React from 'react';

const ProductList = (props) => {

  return (

    <div className='productList'>
      {
        props.products.map((product, index) => (
          <div className='productCard'>
            <h3>{ product.name }</h3>
            <img src={ product.image } />
            <p>{ product.price }</p>
          </div>
        ))
      }
    </div>

  )
}

export default ProductList;
