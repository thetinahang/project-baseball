import React, { Component } from 'react';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Add a Product:</h1>
          <label>Name: </label><input type="text" name="name"onChange={this.handleChange} /><br/>
          <label>Description: </label><input type="text" name="description" onChange={this.handleChange} /><br/>
          <label>User ID: </label><input type="text" name="user_id" onChange={this.handleChange} /><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default ProductInput;