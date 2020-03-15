import React from 'react'; 
import { Card, CardContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    padding: '10px',
    textAlign: 'center',
    color: '#00897b',
  }
});

function ProductList(products) {
  const classes = useStyles();

  console.log('from product list render')
    return (
      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center" >
          {products['products'].map(product => 
            <Grid item>
              <Card className={classes.card} variant="outlined" key={product['attributes']['id']}>
                <CardContent className={classes.root}>
                  <Typography variant="h5" component="h2">
                    {product['attributes']['name']}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {product['attributes']['description']}
                  </Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                  <Button size="small">See More Info</Button>
                </CardActions>
              </Card>
            </Grid>
          )}
        </Grid>
      </div>
  )
}

export default ProductList; 