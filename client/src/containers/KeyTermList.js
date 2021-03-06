import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { fetchKeyTerms } from '../actions/keyTermActions';
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
    console.log(keyterms)
		console.log('from key term list render')
		return (
      <div>
      <Grid container direction="row" justify="center" alignItems="center" >
        {keyterms.map(keyterm =>
          <KeyTerm keyterm={keyterm['attributes']} key={keyterm.id}/>
        )}
      </Grid>
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