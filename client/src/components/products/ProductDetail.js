import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

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
      </Paper>
    </div>
  )
};

export default ProductDetail;