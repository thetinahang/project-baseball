import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { fetchKeyTerms } from '../actions/keyTermActions';


class KeyTermList extends Component {

	componentWillMount() {
    console.log('from key term list mount')
    console.log(this.props)
    this.props.fetchKeyTerms()
  }

//	listKeyTerms = () => {
//		console.log('from list key terms in key term list')
//		console.log(this.props.product.id)
//		console.log(this.props)
//		return this.props.keyterms['keyterms'].map(keyterm => 
//    <Card variant="outlined" key={keyterm['attributes']['id']}>
//			<CardHeader title={keyterm['attributes']['name']}></CardHeader> 
//		<CardContent>{keyterm['attributes']['description']}</CardContent>
//    </Card>
//		)
//	}

	render() {
    const { keyterms } = this.props.keyterms;
		console.log('from key term list render')
		return (
			<div>{keyterms}</div>
		)
	}
}


const mapStateToProps = state => {
  return { 
    keyterms: state.keyterms,
    loading: state.loading 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchKeyTerms: () => dispatch(fetchKeyTerms())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (KeyTermList)