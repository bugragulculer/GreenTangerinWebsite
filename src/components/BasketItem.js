import { removeFromBasket } from '../redux/actions/basketActions'
import { useDispatch } from 'react-redux'
import BasketItemControl from './BasketItemControl'

const BasketItem = ({ product }) => {
    const dispatch = useDispatch();
    const onRemoveFromBasket = () => dispatch(removeFromBasket(product.id));

    return (
        <div className='cart__content__wrapper'>
            <div className='cart__divider' />
            <div className='cart__content'>
                <img className='cart__content__image' src={product.fields.images[0].url} alt=""/>
                <div className='cart__content__details'>
                    <h1>{ product.fields.title}</h1>
                    <p>{product.selectedColor}, {product.selectedSize}</p>
                </div>
                <div className='cart__content__props'>
                    <BasketItemControl product={ product}/>
                    <p>${ product.price}.00</p>
                    <button onClick={ onRemoveFromBasket }>Remove</button>
                </div>
            </div>
            <div className='cart__divider'/>
        </div>
    )
}

export default BasketItem