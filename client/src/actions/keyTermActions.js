export const fetchKeyTerms = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_KEYTERMS' })
    fetch('http://localhost:3001/api/users/1/products/1/key_terms')
      .then(response => response.json())
      //.then(json => console.log(json['data']))
      .then(json => dispatch({ type: 'FETCH_KEYTERMS', products: json['data'] }))
      .catch(error => console.log(error))
    //then(products => {dispatch({ type: 'FETCH_PRODUCTS', products: products })})
  }
} 