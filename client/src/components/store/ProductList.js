import React from 'react';

const ProductList = (props) => {

  return (

    <div className='productList'>
      {
        props.products.map((product, index) => (
          <div className='productCard'>
            <h3>{ product.name }</h3>
            <img src={ product.image } />
            <p>${ product.price }</p>
            <button className="btn-add-to-cart" onClick={()=> props.addToCart(product)}>Add to Cart </button>
          </div>
        ))
      }
    </div>

  )
}

export default ProductList;
