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
          <label>Add Product: </label>
          <input type="text" onChange={this.handleChange} value={this.state.name} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default ProductInput;