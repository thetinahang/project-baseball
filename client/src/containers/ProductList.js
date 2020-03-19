import React, {Component} from 'react'; 
import Grid from '@material-ui/core/Grid';
import Product from '../components/products/Product'
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { Box } from '@material-ui/core';

class ProductList extends Component {

  componentDidMount() {
    console.log('from mount')
    console.log(this.props)
    this.props.fetchProducts()
  }

	render() {
		console.log('from product list render')
		console.log(this.props.products)

		const { products } = this.props.products
		
		return (
			<Grid container direction="row" justify="center" alignItems="center" >
				{products.map(product =>
					<Product product={product['attributes']} key={product.id}/>
				)}
			</Grid>
	)
	};
}

const mapStateToProps = state => {
  return { 
    products: state.products,
    loading: state.loading 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductList)
