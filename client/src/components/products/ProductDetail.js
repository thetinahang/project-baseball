import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import KeyTermList from '../../containers/KeyTermList';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function ProductDetail(product) {
  const classes = useStyles();
  console.log('from product detail render')
  console.log(product)

  return (
    <div className={classes.root}>
      <Paper variant="outlined" square>
        <p align="center">Current Price: {product.product.id}</p>
        <KeyTermList />
      </Paper>
    </div>
  )
};

export default ProductDetail;