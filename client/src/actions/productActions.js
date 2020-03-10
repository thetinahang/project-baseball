export function fetchProducts() {
   return (dispatch) => {
     dispatch({ type: 'LOADING_PRODUCTS' });
     return fetch('http://localhost:3001/api/user/1/products')
       .then(response => response.json())
       .then(products => dispatch({ type: 'FETCH_PRODUCTS', payload: products }));
   };
 } 