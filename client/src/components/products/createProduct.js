import React, { Component } from 'react'
 
class CreateProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: ''
    };
  }
 
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
 
  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input
          type="name"
          onChange={this.handleChange} value={this.state.name}/>
          <input
          type="description"
          onChange={this.handleChange} value={this.state.description}/>
          </p>
          <input type="submit" />
       </form>
       {this.state.name}
       {this.state.description}
     </div>
   );
  }
};
 
export default CreateProduct;