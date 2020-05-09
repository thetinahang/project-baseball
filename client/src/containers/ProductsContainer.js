import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductInput from '../components/products/ProductInput'
import ProductList from '../components/products/ProductList'

class ProductsContainer extends Component {
	render() {
		return(
			<div>
				<ProductList products={this.props.products}/>
				<ProductInput addProduct={this.props.addProduct}/>
			</div>
		)
	}
}

const mapStateToProps = ({ products }) => ({ products })

const mapDispatchToProps = dispatch => ({ addProduct: product => dispatch({ type: "ADD_PRODUCT", product })})

export default connect(mapStateToProps, mapDispatchToProps) (ProductsContainer)