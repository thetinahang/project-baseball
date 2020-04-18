import React, {Component} from 'react'; 
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/productActions';
import Grid from '@material-ui/core/Grid';
import Product from '../products/Product';

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
			<div align="center">
			<h1>Here are your products:</h1>
			<Grid container direction="row" justify="center" alignItems="center" >
				{products.map(product =>
					<Product product={product['attributes']} key={product.id}/>
				)}
			</Grid>
			</div>
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
