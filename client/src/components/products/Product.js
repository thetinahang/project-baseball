import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import ProductDetail from '../products/ProductDetail';
import ProductModal from '../products/ProductModal';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
    margin: theme.spacing(2),
  },
  header: {
    textAlign: 'center',
    spacing: 10,
  },
  list: {
    padding: '10px',
  },
  button: {
    margin: theme.spacing(1),
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

function Product(product) {
  const classes = useStyles();
  console.log('from product render')
  console.log(product)

  return (
    <Card className={classes.root} width="400px" key={product.id}>
      <CardHeader title="" className={classes.header} />
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
        <ProductModal product={product.product}/>
      </CardActions>
    </Card>
  )
};

export default Product;