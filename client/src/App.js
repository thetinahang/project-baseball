import React, { Component } from 'react';
import ProductList from './containers/ProductList';
import { connect } from 'react-redux';
import { fetchProducts } from './actions/productActions';
import {Box, Grid, Paper } from '@material-ui/core';


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
        <Box component="span" m={1} align="center">
          <h1>Hello from the App file</h1>
        </Box>
        <Box component="span" m={1}>
          <ProductList products={this.props.products} />
        </Box>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <Paper>
            Hello
            </Paper>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <Paper />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <Paper />
          </Grid>
        </Grid>
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
