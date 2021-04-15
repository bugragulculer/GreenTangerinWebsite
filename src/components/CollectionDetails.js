import React from 'react';
import useScrollTop from '../hooks/useScrollTop'

function Products(props) {
    // Scrolling to the top.
    useScrollTop();

    return (
        <div className='products__1' key={item.ids}>
            <div className='product__2' >
                <img alt={item.title} className='products__product__image' src={item.images[0].url} />
                    <h1 className='products__product__header'>{item.title}</h1>
                    <div className='product__container__2'>
                        <p className='products__product__colors'>{item.colors} Colors</p>
                        <p className='products__product__sizes'>{item.sizes} Sizes</p>
                    </div>
                    <p className='products__product__type'>{item.type}</p>
                    <p className='products__product__price'>${item.price}.00</p>
            </div>
        </div>
    )
}
export default Products;
