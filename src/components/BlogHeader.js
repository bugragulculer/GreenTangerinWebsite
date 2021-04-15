import '../styles/BlogHeader.css'
import React from 'react'
import { Link } from 'react-router-dom' 

const App = (props) => {
    const blog = props.blog
    return <div className='blog__header__container'>
        {blog.map((e) => (
            e.fields.header ? (
            <div className='blog__header__header' key={e.id}>
                <div className='blog__header__image__1'>
                    <img className='blog__header__image' src={e.fields.image[0].url} alt='f1_circuits' />
                </div>
                <div className='blog__header__gradient'>
                    <h1 className='blog__header__h1'>{e.fields.title}</h1>
                    <h2 className='blog__header__h2'>{ e.fields.subtitle }</h2>
                    <Link className='blog__header__button' to={ `/blog/${e.fields.url}` }>{e.fields.buyButton}</Link>
                </div>
            </div>
            ) : null
        ))}
    </div>
}
export default App