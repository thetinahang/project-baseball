import React, { Component } from 'react'; 
import { Card, CardContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function ProductList() {
  const classes = useStyles();

  listProducts = () => {
    console.log('from list products in product list')
    console.log(this.props.products)
    return this.props.products['products'].map(product => 
      <Card variant="outlined" key={product['attributes']['id']}>
        <CardContent className={classes.root}>
          <Typography variant="h5" component="h2">
            Name: {product['attributes']['name']}
          </Typography>
          <Typography variant="body2" component="p">
            Description: {product['attributes']['description']}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See More Info</Button>
        </CardActions>
      </Card>
    )
  }

  console.log('from product list render')
    return (
      <div>
        {this.listProducts()}
      </div>
    )
}

export default ProductList; 