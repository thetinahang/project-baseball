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
} 


export const addProduct = (product) => {
  console.log(createAddUrl({id:1}))
  let body = JSON.stringify(
    {
      product: {
        name: product.name, 
        description: product.description, 
        user_id: product.user_id
      }
    }
  )

  return (dispatch) => {
    dispatch({ type: 'ADD_PRODUCT' })
    fetch(createUrl({id:1},
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      }
    ))
      .then(response => response.json())
      //.then(json => console.log(json['data']))
      .catch(error => console.log(error))
    //then(products => {dispatch({ type: 'FETCH_PRODUCTS', products: products })})
  }
} 