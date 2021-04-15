import { useDispatch } from 'react-redux';
import { applyFilter } from '../redux/actions/filterActions';

const ProductAppliedFilters = ({ filter }) => {
	const dispatch = useDispatch();

		dispatch(applyFilter({ sortBy: '' }));
		dispatch(applyFilter({ category: '' }));
		dispatch(applyFilter({ type: '' }));
};

export default ProductAppliedFilters;
