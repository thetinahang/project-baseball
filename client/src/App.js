import React, { Component } from 'react';
import ProductList from './containers/ProductList';
import { connect } from 'react-redux';
import { fetchProducts } from './actions/productActions';
import { Box } from '@material-ui/core';

class App extends Component {

  render () {
    console.log('from app')

    return (
      <div className="App">
        <Box align="center">
          <h1>Welcome!</h1>
          <h2>Check out your products</h2>
          <ProductList />

        </Box>
      </div>
    ) 
  }
}

export default App;
