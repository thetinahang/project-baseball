import React, {Component} from 'react'; 
import Grid from '@material-ui/core/Grid';
import Product from '../components/products/Product'

class ProductList extends Component {

	render() {
		console.log('from product list render')
		console.log(this.props.products)
		return (
		<Grid container direction="row" justify="center" alignItems="center" >
			{this.props.products.map(product =>
				<Product product={product['attributes']} key={product.id}/>
			)}
		</Grid>
	)
	};
}

export default ProductList; 