import React from 'react'; 
import { Card, CardContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Divider } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';

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
		padding: '20px',
	},
	button: {
		margin: theme.spacing(1),
	},
	action: {
		display: 'flex',
		justifyContent: 'space-around',
	},
}));

function ProductList(products) {
	const classes = useStyles();

	console.log('from product list render')
	return (
		<Grid container direction="row" justify="center" alignItems="center" >
			{products['products'].map(product =>
				<Card className={classes.root} width="400px" key={product.id}>
					<CardHeader title="" className={classes.header} />
					<Divider variant="middle" />
					<CardContent>
						<Typography variant="h4" align="center">
							{product['attributes']['name']}
						</Typography>
						<div className={classes.list}>
							<Typography align="center">{product['attributes']['description']}</Typography>
						</div>
					</CardContent>
					<Divider variant="middle" />
					<CardActions className={classes.action}>
						<Button variant="contained" color="primary" className={classes.button}>
							See more info
						</Button>
					</CardActions>
				</Card>
			)}
		</Grid>
	);
}

export default ProductList; 