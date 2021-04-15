// Basket reducer functions. 
const basketReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_BASKET_ITEMS':
			return action.payload;
		case 'ADD_TO_BASKET':
			return  [...state, action.payload];
		case 'REMOVE_FROM_BASKET':
			return state.filter(product => product.id !== action.payload);
		case 'ADD_QTY_ITEM':
			return state.map((product) => {
				if (product.id === action.payload.id) {
					return {
						...product,
						number: parseInt(product.number) + parseInt(1)
					}
				}
				return product;
			});
		case 'MINUS_QTY_ITEM':
			return state.map((product) => {
				if (product.id === action.payload.id) {
					return {
						...product,
						number: parseInt(product.number) - parseInt(1)
					}
				}
				return product;
			});
		case 'CLEAR_BASKET':
			return [];
		default:
			return state;
	}
};

export default basketReducer