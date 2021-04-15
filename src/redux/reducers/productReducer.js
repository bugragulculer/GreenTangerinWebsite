const initState = {
	lastRefKey: null,
	total: 0,
	items: []
}

const productReducer = (state = {
	lastRefKey: null,
	total: 0,
	items: [],
	searchedProducts: initState
}, action) => {
	switch (action.type) {
		case 'GET_PRODUCTS_SUCCESS':
			return {
				...state,
				lastRefKey: action.payload.lastKey,
				total: action.payload.total,
				items: [...state.items, ...action.payload.products]
			};
		default:
			return state;
	}
};

export default productReducer