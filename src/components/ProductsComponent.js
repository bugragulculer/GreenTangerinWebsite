import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/ProductsComponent.css'

function Products(product) {
    const item = product.product;

    return (
        <div className='products__1' key={item.ids}>
            <Link className='product__2' to={`/products/${item.url}`}>
                <img alt={item.title} className='products__product__image' src={item.images[0].url} style={{backgroundColor:item.background}}/>
                <h1 className='products__product__header'>{item.title}</h1>
                <div className='product__container__2'>
                    {item.colors === 1 ? <p className='products__product__colors'>{item.colors} Color</p> : <p className='products__product__colors'>{item.colors} Colors</p>}
                    {item.sizes === 1 ? <p className='products__product__colors'>{item.sizes} Size</p> : <p className='products__product__colors'>{item.colors} Sizes</p>}                    
                </div>
                <p className='products__product__type'>{item.type}</p>
                { item.Types === "Freebies" ? <p className='products__product__price'>Free</p> : <p className='products__product__price'>${item.price}.00+</p>}
            </Link>
        </div>
    )
}
export default Products;
