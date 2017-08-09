import React from 'react';

const ProductList = (props) => {

  return (

    <div className='productList'>
      {
        props.products.map((product, index) => (
          <div className='productCard'>
            <div className="textItems">
            <h3>{ product.name }</h3>
            <p>{ product.price }</p>
            </div>
            <img src={ product.image } />
          </div>
        ))
      }
    </div>

  )
}

export default ProductList;
