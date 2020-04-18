const productsReducer = (state = { products: [], loading: false}, action ) => {
	switch(action.type) {
		case 'LOADING_PRODUCTS':
			return {
				...state,
				products: [...state.products],
				loading: true
			}

		case 'FETCH_PRODUCTS':
			return {
				...state,
				products: action.products,
				loading: false
			}

		case 'ADD_PRODUCT':
			return {
				...state, 
				products: [...state.products, action.product]
			}

		default: 
			return state;
	}
}

export default productsReducer;