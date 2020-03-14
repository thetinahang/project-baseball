import React, { Component } from 'react'; 
import { Paper } from '@material-ui/core';

class ProductList extends Component {
 	listProducts = () => {
 		console.log('from list products in product list')
 		console.log(this.props.products)
 		return this.props.products['products'].map(product => 
        <Paper key={product['attributes']['id']}>
		 			<p>
		 				{product['attributes']['id']}. {product['attributes']['name']} - {product['attributes']['description']}
		 			</p>
        </Paper>
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