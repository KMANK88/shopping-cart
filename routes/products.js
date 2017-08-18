const express = require('express')
const Router = express.Router()
const Product = require('../modules/Product')

Router.route('/')
.get((req, res) => {
  Product.find((err, products) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'Successfully retrieved ALL products', data: products })
    }
  })
})
.post((req,res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image
  })

  product.save((err, product) => {
    if (err) {
      res.json({ message: err, data: null })
    }else{
      res.json({ message: 'susessfully created product', data: product})
    }
  })

})

Router.route('/:product_id')
  .get((req,res)=> {
    Product.findById(req.params.product_id,(err, product)=> {
      if(err) {
        res.json({ message: err, data: null })
      }else{
        res.json({ message: 'product retrived' , data: product})
      }
    })
    })

    .delete((req, res) => {
        Product.remove({ _id: req.params.product_id }, err => {
          if(err) {
            res.json({ message: err, data: null })
          } else {
            res.json({ message: 'product deleted', data: {} })
          }
        })
      })

module.exports = Router
