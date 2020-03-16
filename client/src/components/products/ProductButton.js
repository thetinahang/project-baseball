import React, { Component} from 'react';
import { Card, CardContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import {Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import { Link } from 'react-router-dom';
import { spacing } from '@material-ui/system';
import ProductDetail from '../products/ProductDetail';


class ProductButton extends Component {
  constructor(props) {
    super(props);
    this.state = {isClicked: false};
  }

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {
    console.log('from product button render')
    console.log(this.props.product)

    const isClicked = this.state.isClicked;
    let button;
    if (isClicked) {
      button = <ProductDetail product={this.props.product} />
    } else {
      button = <Button>See More Info</Button>
    }

    return (
      <div>
        <Button onClick={this.handleClick}>
          {button}
        </Button>
      </div>
    )
  }
};

export default ProductButton;