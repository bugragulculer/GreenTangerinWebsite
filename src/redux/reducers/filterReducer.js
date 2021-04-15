// Filter reducer functions. 

const initState = {
	recent: [],
	category: "",
	type: "",
	sortBy: ""
};

const filterReducer = (state = initState, action) => {
	switch (action.type) {
		case 'SET_CATEGORY_FILTER':
			return {
				...state,
				category: action.payload
            };
        case 'SET_TYPE_FILTER':
			return {
				...state,
				type: action.payload
			};
		case 'RESET_FILTER':
			return {
				...state,
				type: action.payload
			};
		case 'APPLY_FILTER':
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};
export default filterReducer