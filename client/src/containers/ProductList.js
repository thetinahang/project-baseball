import React, { Component } from 'react'; 
import {Box, Grid, Paper } from '@material-ui/core';

class ProductList extends Component {
 	listProducts = () => {
 		console.log('from list products in product list')
 		console.log(this.props.products)
 		return this.props.products['products'].map(product => 
      <Grid container item xs={12} spacing={3}>
        <Paper>
		 			<p key={product['attributes']['id']}>
		 				{product['attributes']['id']}. {product['attributes']['name']} - {product['attributes']['description']}
		 			</p>
        </Paper>
      </Grid> 		
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