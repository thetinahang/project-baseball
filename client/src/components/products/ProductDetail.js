import React from 'react';
import {Button} from '@material-ui/core';

function ProductDetail(product) {
  console.log('from product detail render')
  console.log(product)

  return (
    <div>
      <p align="center">Current Price: {product.product.id}</p>
      <br />
      <Button>Change Key Terms</Button>
    </div>
  )
};

export default ProductDetail;