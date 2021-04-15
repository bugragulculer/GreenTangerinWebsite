import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/FeaturedProducts.css'

const FeaturedProducts = props => {
    // Getting products info and selecting random 6 of the featured products. 
    const products = props.products;
    const featured = products.filter(product => product.fields.featured === true);
    const random = featured.sort(() => Math.random() - Math.random()).slice(0, 6);

    return (
        <div className='featured__products__wrapper'>
            <h1 className='featured__header'>Featured Products</h1>
            <div className='home__featured__products'>
                {random.map((e) => (
                    <div className='featured__product' key={e.id}>
                        <Link className='featured__product__container' to={`/products/${e.fields.url}/`}>
                            <img alt={e.fields.title} className='featured__product__image' src={e.fields.images[0].url} style={{backgroundColor:e.fields.background}} />
                            <h1 className='featured__product__header'>{e.fields.title}</h1>
                            <p className='featured__product__price'>${e.fields.price}.00</p>
                        </Link >
                    </div>
                ))}
            </div>
        </div>

    )    
}
export default FeaturedProducts