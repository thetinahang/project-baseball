import React, { Component } from 'react';
import ProductList from './containers/ProductList';
import { connect } from 'react-redux';
import { fetchProducts } from './actions/productActions';
import {Button, Box} from '@material-ui/core';


class App extends Component {

  componentDidMount() {
    console.log('from mount')
    console.log(this.props)
    this.props.fetchProducts()
  }

  render () {
    console.log('from render')
    console.log(this.props.products);
    return (
      <div className="App">
        <Box color="text.primary">
          <h1>Hello from the App file</h1>
        </Box>
        <ProductList products={this.props.products} />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
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
