const keyTermsReducer = (state = { keyterms: [], loading: false}, action ) => {
	switch(action.type) {
		case 'LOADING_KEYTERMS':
			return {
				...state,
				keyterms: [...state.keyterms],
				loading: true
			}

		case 'FETCH_KEYTERMS':
			return {
				...state,
				keyterms: action.keyterms,
				loading: false
			}

		default: 
			return state;
	}
}

export default keyTermsReducer;