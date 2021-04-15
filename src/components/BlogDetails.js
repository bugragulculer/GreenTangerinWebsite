import React from 'react'
import '../styles/BlogDetails.css'
import useScrollTop from '../hooks/useScrollTop'

function ProductDetails(props) {
    const id = props.id.slug
    const item = props.blog
    useScrollTop();

    return <div className='blog__details__container'>
        {item.map((e) => (
            e.fields.url === id && (
            <div className='blog__details__header' key={ e.id }>
                <div className='blog__details__image__wrapper'>
                    <img className='blog__details__image' src={ e.fields.image[0].url } alt='f1_circuits' />
                </div>
                <div className='blog__gradient'>
                    <div className='blog__half'>
                        <h1 className='blog__h1'>{e.fields.title}</h1>
                        <code className='blog__desc'>{ e.fields.description }</code>
                    </div>
                </div>
            </div>
            )
        ))}
    </div>
}

export default ProductDetails;