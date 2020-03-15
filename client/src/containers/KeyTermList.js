import React, { Component } from 'react'; 
import { Card, CardHeader, CardContent } from '@material-ui/core';

class KeyTermList extends Component {
	listKeyTerms = () => {
		console.log('from list key terms in key term list')
		console.log(this.props.keyterms)
		return this.props.keyterms['keyterms'].map(keyterm => 
    <Card variant="outlined" key={keyterm['attributes']['id']}>
			<CardHeader title={keyterm['attributes']['name']}></CardHeader> 
		<CardContent>{keyterm['attributes']['description']}</CardContent>
    </Card>
		)
	}

	render() {
		console.log('from key term list render')
		return (
			<div>
				{this.listKeyTerms()}
			</div>
		)
	}
}

export default KeyTermList; 