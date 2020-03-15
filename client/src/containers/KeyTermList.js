import { Component } from 'react'; 
import { connect } from 'react-redux';
import { fetchKeyTerms } from '../actions/keyTermActions';


class KeyTermList extends Component {

	componentDidMount() {
    console.log('from mount')
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
		console.log('from key term list render')
		return (
			'Hello from key term list'
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