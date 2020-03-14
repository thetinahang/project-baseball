import React, { Component } from 'react'; 
import { Card, CardHeader, CardContent } from '@material-ui/core';

class ProductList extends Component {
 	listProducts = () => {
 		console.log('from list products in product list')
 		console.log(this.props.products)
 		return this.props.products['products'].map(product => 
      <Card variant="outlined" key={product['attributes']['id']}>
		 		<CardHeader title={product['attributes']['name']}></CardHeader> 
        <CardContent>{product['attributes']['description']}</CardContent>
      </Card>
 		)
 	}

 	render() {
 		console.log('from product list render')
		return (
	 		<div>
	 			{this.listProducts()}
	 		</div>
	 	)
	}
}

export default ProductList; 