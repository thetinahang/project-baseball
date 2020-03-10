export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PRODUCTS' })
    fetch('http://localhost:3001/api/users/1/products')
      .then(response => response.json())
      //.then(json => console.log(json['data']))
      .then(json => dispatch({ type: 'FETCH_PRODUCTS', products: json['data'] }))
      .catch(error => console.log(error))
    //then(products => {dispatch({ type: 'FETCH_PRODUCTS', products: products })})
  }
} 