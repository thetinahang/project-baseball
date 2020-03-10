import React, { Component } from 'react'; 

class ProductList extends Component {
 	listProducts = () => {
 		console.log(this.props.products)
 	}

 	render() {
		return (
	 		<div>
	 			{this.listProducts()}
	 		</div>
	 	)
	}
}

export default ProductList; 