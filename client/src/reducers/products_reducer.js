export default function productsReducer(state={
 	loading: false,
 	products: [],
 }, action) {
 	switch ( action.type ) {
 		case 'LOADING_PRODUCTS':
 			return {...state, loading: true}
 		case 'FETCH_PRODUCTS':
 			return {loading: false, products: action.payload}
 	default: 
 		return state;
 	}
} 