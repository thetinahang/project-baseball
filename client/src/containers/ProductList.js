import React, { Component } from 'react'; 

class ProductList extends Component {
 	listProducts = () => {
 		console.log('from list products in product list')
 		console.log(this.props.products)
 		return this.props.products['products'].map(product => 
 			<li key={product['attributes']['id']}>
 				{product['attributes']['id']}. {product['attributes']['name']} - {product['attributes']['description']}
 			</li>
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