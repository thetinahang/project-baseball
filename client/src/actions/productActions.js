export const fetchProducts = (user_id) => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_PRODUCTS' })
      fetch(`http://localhost:3001/api/users/${user_id}/products`)
        .then(response => response.json())
        .then(json => dispatch({ type: 'FETCH_PRODUCTS', products: json['data'] }))
        .catch(error => console.log(error))
    }
}

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