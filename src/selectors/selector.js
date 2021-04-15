// Sorting algorithm.
export const selectFilter = (products, filter) => {

	if (!products || products.length === 0) return [];
	return products.filter((product) => {
		// Matching category and type of the products. 
		const matchType = product.fields.Types ? product.fields.Types.includes(filter.type) : true;
		const matchCategory = product.fields.Collections ? product.fields.Collections.includes(filter.category) : true;
		return (matchCategory && matchType);
	}).sort((a, b) => {
		// Detailed sorting algorithms. 
		if (filter.sortBy === 'Price: Low to High') {
			return a.fields.price > b.fields.price ? 1 : -1;
		} else if (filter.sortBy === 'Price: High to Low') {
			return a.fields.price < b.fields.price ? 1 : -1;
		} else if (filter.sortBy === 'Name: A to Z') {
			return a.fields.title > b.fields.title ? 1 : -1;
		} else if (filter.sortBy === 'Name: Z to A') {
			return a.fields.title < b.fields.title ? 1 : -1;
		} else {
			return [];
		}
	});
};