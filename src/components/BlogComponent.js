import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/BlogComponent.css'

const Products = (props) => {
    const e = props.blog
    return (
            <div className='blog__1' key={e.title}>
                <div className={'blog__2'} >
                    <Link className='featured__blog__container' to={`/blog/${e.url}/`}>
                        <img alt={e.title} className='blog__image' src={e.image[0].url} />
                        <h1 className='blog__header'>{e.title}</h1>
                    </Link>
                </div>
            </div>
    )
}
export default Products;