import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

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

function KeyTerm(keyterm) {
  const classes = useStyles();
  console.log('from keyterm render')
  console.log(keyterm)

  return (
    <Card className={classes.root} width="400px" key={keyterm.id}>
      <CardActions className={classes.action}>
      </CardActions>
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="h4" align="center">
          {keyterm.keyterm['value']}
        </Typography>
        <div className={classes.list}>
          <Typography align="center">desc</Typography>
        </div>
      </CardContent>
      <Divider variant="middle" />
      <CardActions className={classes.action}>
      </CardActions>
    </Card>
  )
};

export default KeyTerm;