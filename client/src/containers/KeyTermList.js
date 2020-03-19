import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { fetchKeyTerms } from '../actions/keyTermActions';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import KeyTerm from '../components/keyterms/KeyTerm'


class KeyTermList extends Component {

	componentDidMount() {
    console.log('from key term list mount')
    console.log(this.props)
    this.props.fetchKeyTerms()
  }

	render() {
    const { keyterms } = this.props.keyterms;
    console.log(keyterms[0])
		console.log('from key term list render')
		return (
      <div>
      {keyterms.map(keyterm =>
        <Card variant="outlined" key={keyterm['attributes']['id']}>
          <CardHeader title={keyterm['attributes']['value']}></CardHeader> 
        <CardContent>desc</CardContent>
        </Card>
      )}
      </div>
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