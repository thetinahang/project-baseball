import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import ProductList from './containers/ProductList';

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
