// Redux Filter Actions

export const setCategoryFilter = category => ({
	type: 'SET_CATEGORY_FILTER',
	payload: category
});

export const setTypeFilter = type => ({
	type: 'SET_TYPE_FILTER',
	payload: type
});

export const resetFilter = () => ({
	type: 'RESET_FILTER'
});

export const applyFilter = filters => ({
	type: 'APPLY_FILTER',
	payload: filters
});
