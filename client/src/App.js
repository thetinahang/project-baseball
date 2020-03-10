import React, { Component } from 'react';
import ProductList from './containers/ProductList';
import { connect } from 'react-redux';
import { fetchProducts } from './actions/productActions';

class App extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchProducts()
  }

  render () {
    console.log(this.props.products);
    return (
      <div className="App">
        <h1>Hello from the App file</h1>
        <ProductList products={this.props.products} />
      </div>
    ) 
  }
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

export default connect(mapStateToProps, mapDispatchToProps) (App)
