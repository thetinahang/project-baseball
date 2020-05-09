export const fetchProducts = (userId) => {
  console.log('from fetchproducts')
  console.log(userId);
  const token = localStorage.getItem("token")
    return (dispatch) => {
      dispatch({ type: 'LOADING_PRODUCTS' })
      // need to replace the user id in this request
      fetch(`http://localhost:3001/users/${userId}/products`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }        
      })
      .then(response => response.json())
      //.then(json => console.log(json))
      .then(json => dispatch({ type: 'FETCH_PRODUCTS', products: json['data'] }))
      .catch(error => console.log(error))
    }
}

//  const handleAuthClick = () => {
//    const token = localStorage.getItem("token")
//    fetch(`http://localhost:3001/user_is_authed`, {
//      headers: {
//        "Authorization": `Bearer ${token}`
//      }
//    })
//    .then(resp => resp.json())
//    .then(data => console.log(data))
//  }

export const addProduct = (product) => {
  console.log('from addproduct')
  console.log(product)
  const userId = parseInt(product.user_id)
  const token = localStorage.getItem("token")
  return (dispatch) => {
    fetch(`http://localhost:3001/users/${userId}/products`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({'product': {
        name: product.name,
        description: product.description,
        user_id: userId
      }})
    }).then(resp => resp.json())
      .then(json => dispatch({type: 'ADD_PRODUCT', product: json['data'] }));
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