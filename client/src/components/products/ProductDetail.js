import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import { Link } from 'react-router-dom';

function ProductDetail() {
  const classes = useStyles();
  console.log('from product detail render')
  console.log(product)

  return (
    <Card className={classes.root} width="400px" key={product.id}>
      <CardHeader title="Product Details" className={classes.header} />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="h4" align="center">
          {product.product['name']}
        </Typography>
        <div className={classes.list}>
          <Typography align="center">{product.product['description']}</Typography>
        </div>
      </CardContent>
      <Divider variant="middle" />
      <CardActions className={classes.action}>
        <Button variant="contained" color="primary" className={classes.button}>
          See more info
        </Button>
      </CardActions>
    </Card>
  )
};

export default ProductDetail;