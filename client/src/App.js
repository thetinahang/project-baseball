import React from 'react';
import {Navbar} from 'react-bootstrap';
import ProductList from './containers/ProductList';
import { connect } from 'react-redux';
import { fetchProducts } from './actions/productActions';

function App() {

  componentDidMount() {
    this.props.fetchProducts()
  }

  render () {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <ProductList products={this.props.products} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    ); 
  }
}

const mapStateToProps = state => {
  return { products: state.products }
}

const mapDispatchToProps = dispatch => {
  fetchProducts: fetchProducts()
}

export default connect(mapStateToProps, {fetchProducts}) (App);
