import React from 'react';
import {Button} from '@material-ui/core';

function ProductDetail(product) {
  console.log('from product detail render')
  console.log(product)

  return (
    <div>
      <br />
      <p align="center"><strong>Current Price</strong>: {product.product.id}</p>
      <br />
      <Button>Change Key Terms</Button>
    </div>
  )
};

export default ProductDetail;