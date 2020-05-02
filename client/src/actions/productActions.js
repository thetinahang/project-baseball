function createUrl(params) {
	return `http://localhost:3001/api/users/${params.id}/products`
}

export const fetchProducts = () => {
	console.log(createUrl({id:1}))
  return (dispatch) => {
    dispatch({ type: 'LOADING_PRODUCTS' })
    fetch(createUrl({id:1}))
      .then(response => response.json())
      //.then(json => console.log(json['data']))
      .then(json => dispatch({ type: 'FETCH_PRODUCTS', products: json['data'] }))
      .catch(error => console.log(error))
    //then(products => {dispatch({ type: 'FETCH_PRODUCTS', products: products })})
  }
}; 

export const addProduct = (user_id, product) => {
  return dispatch => {
    fetch(`http://localhost:3001/api/users/${user_id}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(product)
    }).then(resp => resp.json())
      .then(json => dispatch({type: 'ADD_PRODUCT', product: json}));
  }
};