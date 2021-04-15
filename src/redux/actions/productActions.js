// Redux Product Actions

export const getProducts = lastRef => ({
	type: 'GET_PRODUCTS',
	payload: lastRef
});

export const getProductsSuccess = products => ({
	type: 'GET_PRODUCTS_SUCCESS',
	payload: products
});
