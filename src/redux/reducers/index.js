import productReducer from './productReducer';
import basketReducer from './basketReducer';
import filterReducer from './filterReducer';

// Creating the rootReducer
function rootReducer(state = {}, action) {
	return {
		basket: basketReducer(state.basket, action),
		product: productReducer(state.product, action),
		filter: filterReducer(state.filter, action)
	}
}

export default rootReducer;
