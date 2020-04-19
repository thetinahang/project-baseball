import React, { Component } from 'react';

class KeyTermInput extends Component {

  state = {
    value: '',
    product_id: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addKeyTerm(this.state);
    this.setState({
      value: '',
      product_id: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Add a Key Term:</h1>
          <label>Value: </label><input type="text" name="value"onChange={this.handleChange} /><br/>
          <label>Product ID: </label><input type="text" name="product_id" onChange={this.handleChange} /><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default KeyTermInput;