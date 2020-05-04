export const fetchProducts = (userId) => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_PRODUCTS' })
      // need to replace the user id in this request
      fetch(`http://localhost:3001/users/1/products`)
        .then(response => response.json())
        .then(json => dispatch({ type: 'FETCH_PRODUCTS', products: json['data'] }))
        .catch(error => console.log(error))
    }
}

export const addProduct = (userId, product) => {
  return dispatch => {
    fetch(`http://localhost:3001/users/${userId}/products`, {
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

export const removeProduct = (userId, productId) => {
  return dispatch => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      userId: userId,
      productId: productId
    });
  fetch(`http://localhost:3001/users/${userId}/products/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(productId)
  }).then(resp => resp.json())
    .then(json => console.log('deleted product from database', json));
  }
}