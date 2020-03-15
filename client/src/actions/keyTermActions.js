function createUrl(params) {
	return `http://localhost:3001/api/users/${params.user_id}/products/${params.id}/key_terms`
}

export const fetchKeyTerms = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_KEYTERMS' })
    fetch(createUrl({user_id: 1, id: 1}))
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCH_KEYTERMS', products: json['data'] }))
      .catch(error => console.log(error))
  }
} 