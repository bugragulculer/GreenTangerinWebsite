import React from 'react';
import { addQtyItem, minusQtyItem, removeFromBasket } from '../redux/actions/basketActions';
import { useDispatch } from 'react-redux'

const BasketItemControl = ({ product }) => {
	const dispatch = useDispatch();
	
	const onAddQty = () => {
		if (product.number < 20) {
			dispatch(addQtyItem(product));
		}
	};

	const onMinusQty = () => {
		if ((20 >= product.number) && product.number !== 1) {
			dispatch(minusQtyItem(product));
		}
		if (product.number === 1) {
			dispatch(removeFromBasket(product.id))
		}
	};

	return (
		<div className="basket__item__control">
			{product.fields.type === "Printed" ?
				<div
					className="control__minus"
					onClick={onMinusQty}
				>
					-
					</div>
					: ""
			}

			<p className='basket__number'>{product.number}</p>
			{product.fields.type === "Printed" ?
				<div
					className="control__add"
					onClick={onAddQty}
				>
					+
					</div>
					: ""
			}
		</div>
	);
};


export default BasketItemControl;
