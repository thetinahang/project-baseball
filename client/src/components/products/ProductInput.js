import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../actions/productActions';

class ProductInput extends Component {

  state = {
    name: '',
    description: '',
    user_id: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addProduct(this.state);
    this.setState({
      name: '',
      description: '',
      user_id: ''
    })
  }

  render() {
    return(
      <div align="center">
        <form onSubmit={this.handleSubmit}>
          <h1>Add a New Product:</h1>
          <label>Name: </label><input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br/>
          <label>Description: </label><input type="text" name="description" value={this.state.description} onChange={this.handleChange} /><br/>
          <label>User ID: </label><input type="text" name="user_id" value={this.state.user_id} onChange={this.handleChange} /><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addProduct })(ProductInput);