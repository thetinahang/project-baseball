import React, { Component } from 'react';

class ProductInput extends Component {

  state = {
    name: '',
    description: '',
    user_id: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
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
          <label>Name: </label><input type="text" onChange={this.handleChange} value={this.state.name} /><br/>
          <label>Description: </label><input type="text" onChange={this.handleChange} value={this.state.description} /><br/>
          <label>User ID: </label><input type="text" onChange={this.handleChange} value={this.state.user_id} /><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default ProductInput;